const [option] = process.argv.slice(2);

switch(option){
    case 'a':
        console.log('platform:', process.platform);
        break;
    case 'b':
        console.log('title:', process.title);
        break;
    case 'c':
        console.log('pid:', process.pid);
        break;
    default:
        console.log('input a correct arg');
}
