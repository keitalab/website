let gulp = require("gulp")
let sass = require("gulp-sass")
gulp.task("sass", function() {
  gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./static/css/"))
})
gulp.task("sass-watch", ["sass"], function() {
  var watcher = gulp.watch("./sass/**/*.scss", ["sass"])
  watcher.on("change", function(event) {})
})

gulp.task("default", ["sass-watch"])
