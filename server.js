const http = require('http');
const fs = require('fs');

const port = 4000;

http.createServer((req, res) => {
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`);

        fs.appendFile('file.log', chunk, err => {
          if (err) {
            console.error(err);
          }
        });
    });
}).listen(port);