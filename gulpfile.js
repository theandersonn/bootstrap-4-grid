const gulp        = require('gulp');
const scss        = require('gulp-sass');

gulp.task('scss', () => { 
  gulp
  .src(['scss/**/*.scss'])
  .pipe(scss({outputStyle: 'compressed'}).on('Erro de Sintaxe', scss.logError))
  .pipe(gulp.dest('css/'))
});

gulp.task('default', ['scss'], () => {
    gulp.watch('scss/**/*.scss', ['scss'])
});