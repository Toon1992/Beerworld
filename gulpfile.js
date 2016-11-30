var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

// tasks
gulp.task('lint', function() {
  gulp.src(['./public/**/*.js', '!./public/libs/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./public/**/*.css', '!./public/libs/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('minify-js', function() {
  gulp.src(['./public/**/*.js', '!./public/libs/**'])
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/'))
});
gulp.task('copy-bower-components', function () {
  gulp.src('./public/libs/**')
    .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./public/**/*.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'public/',
    port: 4200
  });
});
gulp.task('connectDist', function () {
  connect.server({
    root: 'dist/',
    port: 9999
  });
});


// default task
gulp.task('default',
  ['lint', 'connect']
);
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
  );
});
