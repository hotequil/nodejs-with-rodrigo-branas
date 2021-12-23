console.time('IMMEDIATE');
setImmediate(() => console.timeEnd('IMMEDIATE'));

console.time('TIMEOUT');
setTimeout(() => console.timeEnd('TIMEOUT'));

console.time('TIMEOUT ZERO');
setTimeout(() => console.timeEnd('TIMEOUT ZERO'), 0);
