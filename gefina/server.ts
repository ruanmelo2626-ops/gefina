import {createServer} from 'node:http';

createServer(function (request, response) {
    console.log('A requisição chegou em ' + request.url + 'e com o metodo ' + request.method);
    if (request.url === '/api/health' && request.method === 'GET') {
        response.writeHead(
            200,
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify({ sucess: {
            status: 200,
            message: 'OK'
        }}))

        return;
    }

    response.writeHead(
            404,
            {'content-type': 'application/json'}
        );
        response.end(JSON.stringify({ error: {
            status: 404,
            message: 'Not Found'
        }}))


}).listen(3000);