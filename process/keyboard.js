const onReadable = callback =>
    process.stdin
           .on('readable', () => callback(`you wrote: ${(process.stdin.read()?.toString() || '').trim()}`));

module.exports = { onReadable };
