const http = require('http');
const port = 4000;

const ip = 'localhost'

http.createServer((req, res) => { 
    console.log('Recebendo uma request!');
    res.end('Aqui fica o que vamos enviar para o navegador como resposta!');
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`);
      });

}).listen(port);