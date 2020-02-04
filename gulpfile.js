var gulp = require("gulp");
var postcss = require("gulp-postcss");
var partialImport = require("postcss-partial-import");
var cssnext = require("postcss-cssnext");
var slatecss = require('./src/postcss');
var nested = require('postcss-nested');
var colorFunc = require('postcss-color-function');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task("css:build", function() {
    var processors = [
        partialImport(),
        slatecss(),
        nested(),
        colorFunc(),
        // cssnext({
        //     browsers: ["> 1%"],
        // })
    ]
    return gulp.src("./css/base.css")
               .pipe(postcss(processors))
               .pipe(cleanCSS())
               .pipe(rename("slate.min.css"))
               .pipe(gulp.dest("./build"))
})
gulp.task("default", function() {
    gulp.watch("./css/**/*.css", gulp.series("css:build"))
})