var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    return gulp.src('./{components,resources}/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./{components,resources}/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);