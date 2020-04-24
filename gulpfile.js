var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task("build:all", () => build("./src/all.scss","slate.css") )
gulp.task("build:base", () => build("./src/base.scss","base.css") )
gulp.task("build:utility", () => build("./src/utility.scss","utility.css") )
gulp.task("build:components", () => build("./src/components.scss","components.css") )
gulp.task("build:effects", () => build("./src/effects.scss","effects.css") )

gulp.task("default", function() {
    gulp.watch("./src/**/*.css", gulp.series("build"))
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
    return gulp.src(source)
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(rename(name))
            .pipe(gulp.dest("./css"))
}