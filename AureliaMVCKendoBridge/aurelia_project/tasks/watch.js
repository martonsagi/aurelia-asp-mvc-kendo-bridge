import gulp from 'gulp';
import project from '../aurelia.json';
import build from './build';
import {CLIOptions} from 'aurelia-cli';

function log(message) {
  console.log(message);
}

function onChange(path) {
  log(`File Changed: ${path}`);
}

let watch = function() {
    gulp.watch(project.transpiler.source, build).on('change', onChange);
    gulp.watch(project.markupProcessor.source, build).on('change', onChange);
    gulp.watch(project.cssProcessor.source, build).on('change', onChange);
};

let run = gulp.series(
    build,
    watch
);

export default run;
