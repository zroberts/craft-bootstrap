var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	useref = require('gulp-useref'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	del = require('del'),
	runSequence = require('run-sequence');

var supported = [
	'last 2 versions',
	'safari >= 8',
	'ie >= 9'
	'ff >= 20',
	'ios 6',
	'android 4'
];
var twigTemp = 'templates/**/*.twig'
	sassSource = 'web/source/scss/**/*.scss',
	sassDest = 'web/dist/css',
	jsSource = 'web/srouce/js/**/*.js',
	jsDest = 'web/dist/js',
	fontSrc = 'web/source/fonts/**/*',
	fontDest = 'web/dist/fonts';


gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'web'
		},
	})
});
gulp.task('sass', function(){
	return gulp.src(sassSource)
		.pipe(sass())
		.pipe(cssnano({
			autoprefixer: {browsers: supported, add: true}
		}))
		.pipe(gulp.dest(sassDest))
});
gulp.task('scripts', function(){
	return gulp.src(jsSource)
		.pipe(concat('scirpts.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});
gulp.task('fonts', function(){
	return gulp.src(fontSrc)
		.pipe(gulp.dest(fontDest))
})
gulp.task('clean:dist', function(){
	return del.sync('dist');
})

gulp.task('build', function(callback){
	runSequence('clean:dist', 
		['sass', 'scripts', 'fonts'], 
		callback
	)
})
gulp.task('watch', ['browserSync', 'sass'] function(){
	gulp.watch(sassSource, ['sass']);
	gulp.watch('templates/**/*.twig', browserSync.reload);
	gulp.watch(jsSource, browserSync.reload);	
});
gulp.task('default', function(callback){
	runSequence(['sass', 'browserSync', 'watch'], callback)
});