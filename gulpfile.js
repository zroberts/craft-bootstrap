var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src([
		'web/source/scss/**/*.scss',
		//'!web/source/scss/**/_*.scss'
		])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('web/dist/css'))
})
gulp.task('watch', function(){
	gulp.watch('web/source/**/*.scss', ['sass']);	
})