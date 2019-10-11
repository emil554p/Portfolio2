const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

function styles() {

    return(
        gulp.src('css/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer({grid: true}), cssnano()]))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('css'))
    );

}

function js() {
    return(
        gulp.src('js/*.js')
            .pipe(terser())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('js'))
    );

}

function watch(){
    gulp.watch('css/*.scss', styles)
}

exports.styles = styles;
exports.js = js;
exports.watch = watch;