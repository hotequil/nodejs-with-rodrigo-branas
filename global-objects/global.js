const showGlobal = () => {
    console.log(global);
    console.log(globalThis);
    console.log(global === globalThis);
}

module.exports = { showGlobal };
