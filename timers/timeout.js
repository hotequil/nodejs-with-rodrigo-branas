const { now } = require('./utils');

const text = 'TIMEOUT';

setTimeout(() => now(text), 2000);

now(text);
