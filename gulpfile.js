var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
    gulp.watch('./public/**/*.html', ['html']);
});

gulp.task('reload', function() {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'app.js',
        ext: 'js'
    }).on('restart', function() {
        // when the app has restarted, run livereload.
        gulp.src('app.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
});

gulp.task('lint', function() {
    gulp.src(['./public/**/*.js', '!./public/libs/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
        .pipe(livereload());
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
        .pipe(clean({
            force: true
        }))
        .pipe(livereload());
});

gulp.task('minify-css', function() {
    var opts = {
        comments: true,
        spare: true
    };
    gulp.src(['./public/**/*.css', '!./public/libs/**'])
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload())
});

gulp.task('minify-js', function() {
    gulp.src(['./public/**/*.js', '!./public/libs/**'])
        .pipe(uglify({
            // inSourceMap:
            // outSourceMap: "app.js.map"
        }))
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('copy-bower-components', function() {
    gulp.src('./public/libs/**')
        .pipe(gulp.dest('dist/bower_components'))
        .pipe(livereload());
});

gulp.task('copy-html-files', function() {
    gulp.src('./public/**/*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('default',[
      'lint',
      'reload'
    ]);
// // tasks
// gulp.task('connect', function() {
//     connect.server({
//         root: 'public/',
//         port: 8000
//     });
// });
// gulp.task('connectDist', function() {
//     connect.server({
//         root: 'dist/',
//         port: 9999
//     });
// });
//
//
// // default task
// gulp.task('default', ['lint', 'reload']);
// gulp.task('build', function() {
//     runSequence(
//         ['clean'], ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
//     );
// });
