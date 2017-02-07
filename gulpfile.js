//引用
var gulp=require('gulp');
var less = require('gulp-less');
//源目录
var src = './src/';
//开发目录
var dev='./dev/';
//上线目录
var release = './relase/'
//less转css
gulp.task('less',function () {
    console.log('---->less');
    gulp.src(src+'less/*.less')
        .pipe(less())
        .pipe(gulp.dest(src+'style/'));

})

gulp.task('watch',function () {
    gulp.watch(src + '**/*.less', ['less']);
})
