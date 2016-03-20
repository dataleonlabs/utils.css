var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require('path'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-cssmin');

exports.files = ['src/*.less'];

gulp.task('styles', function () {
  gulp.src(exports.files)
    .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ]}))
    .pipe(autoprefixer())
    .pipe(concat('utils.css'))
    .pipe(gulp.dest('dist'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', [
  'styles'
]);