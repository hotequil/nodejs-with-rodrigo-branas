const { log, error } = require('./console');
const { onReadable } = require('./keyboard');

// console.log(Object.keys(process));

log('test', 'console', 'good');
error('error', 'custom');

// run: node . 1> out.log 2> error.log

onReadable(console.log);
