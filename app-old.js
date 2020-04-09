const http = require('http');

/* req son las request o solicitudes, mientras que res devuelven la respuesta del server */
http.createServer((req, res) => {

        res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');