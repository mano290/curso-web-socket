let gulp = require("gulp"),
    uglify = require("gulp-uglify");

gulp.task("minha_task", () => {
    return gulp.src(["./app.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

gulp.task("observar", () => {
    gulp.watch(["./*.js"], ["minha_task"])
});