import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');
import '../node_modules/reflect-metadata/Reflect.js';

if (process.env.ENV === 'production') {

} else {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}