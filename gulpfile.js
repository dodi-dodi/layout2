'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('scss/layout2.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});
