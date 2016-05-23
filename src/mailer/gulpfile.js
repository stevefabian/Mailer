/// <binding ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    rimraf = require('rimraf');

var paths = {
    ts: {
        src: ["ts/*.ts", "typings/main.d.ts"],
        dest: "wwwroot/app"
    },
    npm: "node_modules/",
    lib: "wwwroot/lib/",
    root: "wwwroot"
}

gulp.task("build", function () {

    var tsProject = tsc.createProject('tsconfig.json');

    return gulp.src(paths.ts.src)
        .pipe(tsc(tsProject))
        .pipe(gulp.dest(paths.ts.dest));
});

gulp.task("watch", function () {
    return gulp.watch(paths.ts.src, ["build"]);
});

gulp.task("bundle", function () {
    gulp.src(paths.npm + "systemjs/dist/**/*.*", { base: paths.npm + "systemjs/dist/" })
        .pipe(gulp.dest(paths.lib + "systemjs/"));

    gulp.src(paths.npm + "angular2/bundles/**/*.*", { base: paths.npm + "angular2/bundles/" })
        .pipe(gulp.dest(paths.lib + "angular2/"));

    gulp.src(paths.npm + "es6-shim/es6-sh*.*", { base: paths.npm + "es6-shim/" })
        .pipe(gulp.dest(paths.lib + "es6-shim/"));

    gulp.src(paths.npm + "es6-promise/dist/**/*.*", { base: paths.npm + "es6-promise/dist/" })
        .pipe(gulp.dest(paths.lib + "es6-promise/"));

    gulp.src(paths.npm + "rxjs/bundles/*.*", { base: paths.npm + "rxjs/bundles/" })
        .pipe(gulp.dest(paths.lib + "exjs/"));

    gulp.src(paths.npm + "bootstrap/dist/js/*.*", { base: paths.npm + "bootstrap/dist/js" })
        .pipe(gulp.dest(paths.lib + "bootstrap/"));

    gulp.src(paths.npm + "bootstrap/dist/css/bootstrap.min.css")
     .pipe(gulp.dest(paths.root + "/css"));

    gulp.src(paths.npm + "bootstrap/dist/fonts/*.*")
     .pipe(gulp.dest(paths.root + "/fonts"));
});

gulp.task('default', function () {
    // place code for your default task here
});