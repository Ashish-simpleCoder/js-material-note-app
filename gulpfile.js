const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function styleBuilder(){
    return src('scss/index.scss').pipe(sass()).pipe(dest('dist/styles/'))
}
function watcher(){
    watch(['scss/**/*.scss'],styleBuilder)
}
exports.default = series(styleBuilder,watcher)