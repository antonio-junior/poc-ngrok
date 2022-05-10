const http = require('http');
const fs = require('fs');

const port = 4000;

http.createServer((req, res) => { 
  const filePath = 'file.log';

  fs.unlinkSync(filePath);

  res.writeHead(200, {'Content-Type': 'text/plain'});

  req.on('data', chunk => {
      console.log(`Data chunk available: ${chunk}`);

      fs.appendFile(filePath, chunk, err => {
        if (err) {
          console.error(err);
        }
      });
      res.end();
  });
    
}).listen(port);