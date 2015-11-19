var gulp            = require('gulp');

var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var minifyCss       = require('gulp-minify-css');

var livereload      = require('gulp-livereload');

// Sass
gulp.task('sass', function() {
    gulp.src('./resources/assets/scss/app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ['> 1%']
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(minifyCss())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('server', function() {
    livereload.listen();
});

// Developement task
gulp.task('watch', ['server', 'sass'], function() {
    gulp.watch('./resources/assets/scss/**/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['watch']);

// Build js/css and run tests
gulp.task('build', ['sass']);
