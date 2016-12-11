import 'babel-register'
import 'babel-polyfill'
import gulp    from 'gulp'
import babel   from 'gulp-babel'
import mocha   from 'gulp-mocha'

import runSequence from 'run-sequence'

const SOURCES    = ['src/**/*.js']
const TEST_FILES = ['test/**/*_test.js', '!test/fixtures/*.js']

gulp.task('test', ['compile'], () => {
  return gulp.src(TEST_FILES)
             //.pipe(mocha({ timeout: 25000, reporter: 'nyan' }))
             .pipe(mocha({ timeout: 25000, reporter: 'dot' }))
})

gulp.task('compile', () => {
  return gulp.src(SOURCES)
             .pipe(babel())
             .pipe(gulp.dest('dist'))
})

gulp.task('default', (done) => runSequence('compile', 'test', done))

