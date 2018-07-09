var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var inject = require('gulp-inject');

gulp.task('sass', function() {
    return gulp.src('./{components,resources}/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('index', function () {
    var target = gulp.src('./index.html');
    var sources = gulp.src(['./components/**/*.js'], {read: false});
   
    return target.pipe(inject(sources))
      .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch('./{components,resources}/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'index', 'watch']);