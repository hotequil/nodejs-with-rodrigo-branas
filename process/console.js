const print = (method, messages) => {
    messages.forEach((message, index) => {
        if(messages.length === (index + 1)) message = ` ${message}\n`;
        else if(index !== 0) message = ` ${message}`;

        process[method].write(message);
    });
};

const log = (...messages) => print('stdout', messages);
const error = (...messages) => print('stderr', messages);

module.exports = { log, error };
