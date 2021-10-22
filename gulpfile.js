import gulp from 'gulp';
import imagemin from "gulp-imagemin";
// import sass from 'gulp-sass';
// var sass = require('gulp-sass')(require('sass'));

function compileSass(done) {
    return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
    done();
};

function sayHi(done) {
    console.log("sup! easy peasy!")
    done();
};

function squashImages(done){
   
        gulp.src('images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('images/dist'))
        done();
};

export { 
        sayHi as hello, 
        squashImages as crunch,
        compileSass as compile
    };