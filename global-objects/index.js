globalThis.num = 100;

const { crazySum } = require('./calculate');
const { showGlobal } = require('./global');
const config = require('./config');

showGlobal();

console.log(config);
console.log(crazySum(1, 2));
