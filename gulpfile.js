var gulp 		= require('gulp'),
	gulpSass 	= require('gulp-sass'),
	sourcemaps	= require('gulp-sourcemaps'),
	server		= require('./server');

var path = {
	style : 'dev/sass/**/main.scss'
}

gulp.task('server', function(){
	server;
});

gulp.task('sass', function(){
	return gulp.src(path.style)
		.pipe(sourcemaps.init())
		.pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./dist/static/css'))
});

gulp.task('watch', function(){
	gulp.watch(path.style, ['sass']);
});

gulp.task('default', ['server', 'watch', 'sass']);