const isSameReference = () => {
    console.log(`exports === module.exports: ${exports === module.exports}`);
    console.log(`module.exports === this: ${module.exports === this}`);
    console.log(`this === exports: ${this === exports}`);
};

isSameReference();
