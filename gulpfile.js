'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nunjucksRender = require('gulp-nunjucks-render');
// var data = require('gulp-data');

gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['pages/'], {watch: false, noCache: true});
  var params = {
    param1: 'param1',
    param2: 'param2',
    param3: 'param3',
  };
  gulp.src(['pages/**/*.html', '!pages/**/_*.html'])
    // .pipe(data(params))
    .pipe(nunjucksRender())
    .pipe(gulp.dest("./dist"));
});

gulp.task('sass', function() {
  // copy bootstrap files
  gulp.src(['node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/swiper/dist/css/swiper.min.css'])
    .pipe(gulp.dest('./dist/css'));

  // compile sass
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  // copy libraries
  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/bootstrap/dist/js/npm.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
            'node_modules/swiper/dist/js/swiper.min.js'])
    .pipe(gulp.dest('./dist/js'));

  gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('assets', function() {
  gulp.src('./font/**/*')
    .pipe(gulp.dest('./dist/font'));

  gulp.src('./image/**/*')
    .pipe(gulp.dest('./dist/image'));

  gulp.src('./CNAME')
    .pipe(gulp.dest('./dist'));
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
gulp.task('watch', ['build', 'nunjucks:watch', 'js:watch', 'sass:watch']);
