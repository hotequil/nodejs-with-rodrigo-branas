const print = (method, messages) => {
    messages.forEach((message, index) => {
        const isNotFirst = index !== 0;

        if(typeof(message) === 'object') message = JSON.stringify(message);
        if(isNotFirst) message = messages.length === (index + 1) ? ` ${message}\n` : ` ${message}`;

        process[method].write(message.toString());
    });
};

const log = (...messages) => print('stdout', messages);
const error = (...messages) => print('stderr', messages);

module.exports = { log, error };
