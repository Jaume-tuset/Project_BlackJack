const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Manejo de otras rutas y archivos aquí

    if (req.url.endsWith('.js')) {
        const filePath = path.join(__dirname, req.url);
        const stat = fs.statSync(filePath);
        res.writeHead(200, {
            'Content-Type': 'application/javascript',
            'Content-Length': stat.size,
        });
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    }
});

server.listen(5500, () => {
    console.log('Servidor en ejecución en el puerto 5500');
});
