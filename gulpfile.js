var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');

gulp.task('sass', function(){
	return gulp.src('web/source/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('web/dist/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'web'
		},
	})
});
gulp.task('useref', function(){
	return gulp.src('templates/*.twig')
		.pipe(useref())
		.pipe(gulp.dest('dist'))
});
gulp.task('watch', ['browserSync', 'sass'] function(){
	gulp.watch('web/source/**/*.scss', ['sass']);
	gulp.watch('templates/**/*.twig', browserSync.reload);
	gulp.watch('web/**/*.js', browserSync.reload);	
});