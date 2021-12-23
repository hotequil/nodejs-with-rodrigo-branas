const net = require('net');
const { PORT } = require('./env');
const connections = [];
const echo = message => connections.forEach(connection => connection.write(`Received ("${message}")`));

net.createServer(connection => {
       connections.push(connection);

       connection.write("Connected in server");

       connection.on('data', message => {
           message = message.toString();

           console.log(`Client: ${message}`);

           echo(message);
       });

       connection.on('end', () => {
           connections.splice(connections.indexOf(connection), 1);

           echo("Someone left");
       })
   })
   .listen(PORT);
