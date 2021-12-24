const http = require('http');

const router = PORT => {
    const routes = [];
    const interceptors = [];
    const add = (method, path, callback) => routes.push({ method, path, callback });
    const get = (path, callback) => add('GET', path, callback);
    const post = (path, callback) => add('POST', path, callback);
    const interceptor = callback => interceptors.push(callback);

    http.createServer((request, response) => {
            interceptors.forEach(interceptor => interceptor(request, response));

            const hasAnyRoute = routes.every(route => {
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

            if(hasAnyRoute){
                response.writeHead(404);
                response.write('<h1>Not found</h1>');
            }

            response.end();
        })
        .listen(PORT, () => console.log('Server is running...'));

    return { get, post, interceptor };
};

module.exports = router;
