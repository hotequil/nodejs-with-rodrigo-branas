const { now } = require('./utils');

const customInterval = (callback, time) =>
    setTimeout(() => {
        callback();
        customInterval(callback, time);
    }, time);

// customInterval(() => now('CUSTOM INTERVAL'), 2000);

const intervalId = setInterval(() => now('INTERVAL'), 1000);

setTimeout(() => clearInterval(intervalId), 4000);
