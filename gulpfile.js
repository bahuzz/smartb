var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();
var sassGlob = require('gulp-sass-glob');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('app/fonts'))
    .pipe(browserSync.stream());
});

gulp.task('img', function() {
  return gulp.src(['src/img/*.png','src/img/*.jpg','src/img/*.svg'])
    .pipe(gulp.dest('app/img'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('bowerjs', function() {
  return gulp.src(
    ['bower_components/jquery/dist/jquery.js',
    'bower_components/bxslider-4/dist/jquery.bxslider.min.js']
    )
        .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});
 
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', function(event, cb) {
        setTimeout(function(){gulp.start('sass');},500) 
    });
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/fonts/*.*', ['fonts']);
  gulp.watch('src/js/*.*', ['js']);
  gulp.watch(['src/img/*.png','src/img/*.jpg','src/img/*.svg'], ['img']);
});

gulp.task('default', ['sass','html','img','js','browser-sync','watch']);