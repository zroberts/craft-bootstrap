var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return hulp.src('web/source/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('web/dist/css'))
})
gulp.task('watch', function(){
	gulp.watch('web/source/**/*.scss', ['sass']);	
})