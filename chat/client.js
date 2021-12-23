const net = require('net');
const { PORT } = require('./env');
const client = net.connect(PORT);

client.on('connect', () => {
    client.write("Client connected");

    process.stdin.on('data', input => client.write((input || '').toString().replace(/\n/, '')));
});

client.on('data', message => console.log(`Server: ${message.toString()}`));
client.on('end', () => process.exit());
