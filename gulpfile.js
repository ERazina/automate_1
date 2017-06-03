'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('jade', function(done) {
    return gulp.src('./*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
done();
});

gulp.task('sass', function(done) {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('build/css'));
done();
});

gulp.task('watch', function(done) {
  gulp.watch('scss/*.scss' ['sass']);
  gulp.watch('./*.jade' ['jade']);
done();    
});