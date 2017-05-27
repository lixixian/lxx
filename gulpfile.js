var gulp=require('gulp')
var gulpMinifyCss = require('gulp-minify-css');
var gulpMinifyHtml = require('gulp-minify-html');

gulp.task('cssmin',function(){
	gulp.src('css/*css').pipe(gulpMinifyCss()).pipe(gulp.dest('css'));
})
gulp.task('htmlmin',function(){
	gulp.src('*.html').pipe(gulpMinifyHtml()).pipe(gulp.dest('./'));
})


gulp.task('hello',function(){
	console.log('hello');
})


gulp.task('default',['hello','cssmin','htmlmin']);