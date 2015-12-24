'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
nunjucksRender.nunjucks.configure(['src/'], {watch: false});

gulp.task('nunjucks', function() {
  gulp.src(['src/**/*.html', '!src/**/_*.html'])
    .pipe(nunjucksRender())
    .pipe(gulp.dest("."));
});


gulp.task('sass', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('nunjucks:watch', function() {
  gulp.watch('src/**/*.html', ['nunjucks']);
});


gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('watch', ['nunjucks:watch', 'sass:watch']);
