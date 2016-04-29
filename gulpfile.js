var gulp = require('gulp');

gulp.task('default', function(){
    gulp.src('**/*.js')
        .pipe(gulp.dest('./build'));
        //.pipe(console.log('copied script file into build dir'));
});