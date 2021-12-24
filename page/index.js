const http = require('http');

const languages = [
    { name: 'JavaScript', extension: '.js' },
    { name: 'C#', extension: '.cs' },
    { name: 'Python', extension: '.py' }
];

const frameworks = [
    { name: 'Angular' },
    { name: 'Vue' },
    { name: 'React' }
];

http.createServer((request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');

        // response.write('<h1>Hello world</h1>');

        if(request.url === '/languages') response.write(JSON.stringify(languages));
        else if(request.url === '/frameworks') response.write(JSON.stringify(frameworks));

        response.end();
    })
    .listen(4000, () => console.log('Server running...'));
