const { now } = require('./utils');

const firstTimeout = setTimeout(() => now('FIRST CLEAR TIMEOUT'), 1000);

setTimeout(() => now('SECOND CLEAR TIMEOUT'), 1000);

clearTimeout(firstTimeout);
