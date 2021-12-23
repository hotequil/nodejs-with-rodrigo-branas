const { generate } = require('./serial');
const { sayHi } = require('say-hi');
const firstCachedModule = require('./cached');
const secondCachedModule = require('./cached');

console.log(generate());
console.log("arguments", arguments);
console.log("__filename", __filename);
console.log("__dirname", __dirname);
console.log(firstCachedModule === secondCachedModule);

sayHi();
