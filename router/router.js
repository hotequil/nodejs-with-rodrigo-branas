const http = require('http');

const router = PORT => {
    const routes = [];
    const add = (method, path, callback) => routes.push({ method, path, callback });
    const get = (path, callback) => add('GET', path, callback);
    const post = (path, callback) => add('POST', path, callback);

    http.createServer((request, response) => {
            routes.every(route => {
                if(request.method === route.method && request.url === route.path){
                    try{
                        route.callback(request, response);
                    } catch(error){
                        console.error(error);
                    }

                    return false;
                }

                return true;
            });

            response.end();
        })
        .listen(PORT, () => console.log('Server is running...'));

    return { get, post };
};

module.exports = router;
