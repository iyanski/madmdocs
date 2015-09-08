'use strict';

var gulp            = require('gulp'),
  watch             = require('gulp-watch'),
  connect           = require('gulp-connect'),
  path              = require('path'),
  port              = 4000;


gulp.task('index', function () {
  gulp.src('./src/index.html');
});

gulp.task('watch', function() {
  gulp.watch(['**/*.*'], ['index']);
});

gulp.task('webserver', function() {
  connect.server({
    root: './',
    port: port
  });
});

gulp.task('default', [
  'index', 'webserver', 'watch'
]);