const http = require('http');
const fs = require('fs');

const port = 4000;

http.createServer((req, res) => { 
    console.log('Recebendo uma request!');
    res.end('Aqui fica o que vamos enviar para o navegador como resposta!');
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`);

        fs.appendFile('file.log', chunk, err => {
          if (err) {
            console.error(err);
          }
        });
    });

}).listen(port);