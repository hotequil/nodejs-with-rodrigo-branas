const { now } = require('./utils');

now('A');
// setTimeout(() => now('B'), 0);
setImmediate(() => now('B'));
now('C');
