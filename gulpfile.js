var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

var supported = [
	'last 2 versions',
	'safari >= 8',
	'ie >= 9'
	'ff >= 20',
	'ios 6',
	'android 4'
];
var sassSource = 'web/source/scss/**/*.scss',
	sassDest = 'web/dist/css',
	jsSource = 'web/srouce/js/**/*.js',
	jsDest = 'web/dist/js';


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
gulp.task('watch', ['browserSync', 'sass'] function(){
	gulp.watch('web/source/scss/**/*.scss', ['sass']);
	gulp.watch('templates/**/*.twig', browserSync.reload);
	gulp.watch('web/**/*.js', browserSync.reload);	
});