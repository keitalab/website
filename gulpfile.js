'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
nunjucksRender.nunjucks.configure(['pages/'], {watch: false});

gulp.task('nunjucks', function() {
  gulp.src(['pages/**/*.html', '!pages/**/_*.html'])
    .pipe(nunjucksRender())
    .pipe(gulp.dest("./dist"));
});

gulp.task('sass', function() {
  // copy bootstrap files
  var bs = "./node_modules/bootstrap/dist";
  gulp.src([bs + '/css/bootstrap-theme.min.css', bs + '/css/bootstrap.min.css'])
    .pipe(gulp.dest('./dist/css'));

  // compile sass
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('assets', function() {
  gulp.src('./font/**/*')
    .pipe(gulp.dest('./dist/font'));

  gulp.src('./image/**/*')
    .pipe(gulp.dest('./dist/image'));
});


gulp.task('nunjucks:watch', function() {
  gulp.watch('pages/**/*.html', ['nunjucks']);
});

gulp.task('js:watch', function() {
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('build', ['nunjucks', 'js', 'sass', 'assets']);
gulp.task('watch', ['nunjucks:watch', 'js:watch', 'sass:watch']);
