const router = require('./router');
const app = router(3000);

const companies = [
    { name: 'Apple' },
    { name: 'Microsoft' },
    { name: 'Google' }
];

app.get('/companies', (request, response) => response.write(JSON.stringify(companies)));
