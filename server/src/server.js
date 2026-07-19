import http from 'node:http';
import routerUsers from './routes/user.route.js'; 

http.createServer((request, response) => {
     if (request.url === '/users') {
        return routerUsers(request, response);
        return;

         }
         response.writeHead(404, {'content-type': 'application/json'});
         response.end(JSON.stringify({message:'página não encontrada'}));
}).listen(3000);
