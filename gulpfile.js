var gulp            = require('gulp');
var sass            = require('gulp-sass');
var notify          = require('gulp-notify');
var source          = require('vinyl-source-stream');
var browserify      = require('browserify');
var babelify        = require('babelify');
var ngAnnotate      = require('browserify-ngannotate');
var browserSync     = require('browser-sync').create();
var rename          = require('gulp-rename');
var templateCache   = require('gulp-angular-templatecache');
var uglify          = require('gulp-uglify');
var merge           = require('merge-stream');
var jasmineBrowser  = require('gulp-jasmine-browser');

// Where our files are located
var sassFiles = "src/sass/**/*.scss";
var jsFiles   = "src/js/**/*.js";
var viewFiles = "src/js/**/*.html";

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('browserify', ['views'], function() {
  return browserify('./src/js/app.js')
    .transform(babelify, {presets: ["es2015"]})
    .transform(ngAnnotate)
    .bundle()
    .on('error', interceptErrors)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
    .on('error', interceptErrors)
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
    .pipe(templateCache({standalone: true}))
    .on('error', interceptErrors)
    .pipe(rename("app.templates.js"))
    .pipe(gulp.dest('./src/js/config/'));
});

gulp.task('jasmine', function() {
  var filesForTest = [
    'build/app.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'tests/**/*.js'
  ];
  return gulp.src(filesForTest)
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});

gulp.task('heroku:', ['sass', 'html', 'browserify']);

gulp.task('default', ['sass', 'html', 'browserify'], function() {
  browserSync.init(['./build/**/**.**'], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(jsFiles, ['browserify']);
  gulp.watch(sassFiles, ['sass']);
});
