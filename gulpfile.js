var gulp = require("gulp");
var postcss = require("gulp-postcss");
var partialImport = require("postcss-partial-import");
var slatecss = require('./src/postcss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task("css:build", function() {
    var processors = [
        partialImport(),
        slatecss(),
        require('postcss-mixins'),
        require('postcss-nested'),
        require('postcss-color-function'),
        require('postcss-for')
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