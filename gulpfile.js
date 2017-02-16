var gulp = require('gulp');


var paths = {
  lib: "lib/",
  npm: "node_modules/",
}


gulp.task("get:js", function () {

  gulp.src(paths.npm + "jquery/dist/jquery.min.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "reflect-metadata/Reflect.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "zone.js/dist/zone.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "systemjs/dist/system-polyfills.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "angular2/bundles/angular2-polyfills.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "systemjs/dist/system.src.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "rxjs/bundles/Rx.js")
    .pipe(gulp.dest(paths.lib));

  gulp.src(paths.npm + "angular2/bundles/angular2.dev.js")
    .pipe(gulp.dest(paths.lib));
});

gulp.task("get:css", function () {

  gulp.src(paths.npm + "font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest(paths.lib + "/css"));

  gulp.src(paths.npm + "bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest(paths.lib + "/css"));

  gulp.src(paths.npm + "bootstrap/dist/fonts/*.*")
    .pipe(gulp.dest(paths.lib + "/fonts"));

  gulp.src(paths.npm + "font-awesome/fonts/*.*")
    .pipe(gulp.dest(paths.lib + "/fonts"));

});
