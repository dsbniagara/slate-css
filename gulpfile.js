var gulp = require("gulp");
var postcss = require("gulp-postcss");
var partialImport = require("postcss-partial-import");
var slatecss = require('./src/postcss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task("build:all", () => build("./css/all.css","slate.min.css") )
gulp.task("build:base", () => build("./css/base.css","slate.base.min.css") )
gulp.task("build:utility", () => build("./css/utility.css","slate.utility.min.css") )
gulp.task("build:components", () => build("./css/components.css","slate.components.min.css") )
gulp.task("build:effects", () => build("./css/effects.css","slate.effects.min.css") )

gulp.task("default", function() {
    gulp.watch("./css/**/*.css", gulp.series("build"))
})
gulp.task("build", gulp.series(
        'build:all',
        'build:base',
        'build:utility',
        'build:components',
        'build:effects'
    )
)

function build(source,name){
    var processors = [
        partialImport(),
        slatecss(),
        // cssnext({
        //     browsers: ["> 1%"],
        // })
    ]
    return gulp.src(source)
               .pipe(postcss(processors))
               .pipe(cleanCSS())
               .pipe(rename(name))
               .pipe(gulp.dest("./build"))
}