import http from 'node:http';
import routerUsers from './routes/user.route.js'; 

http.createServer((request, response) => {
     if (request.url === '/users') {
        return routerUsers(request, response);
         }
}).listen(3000);
