const http = require('http');
const fs = require('fs');

const port = 4000;

http.createServer((req, res) => { 
  console.log("new request")
  
  const filePath = 'file.log';  

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/file') {
    const data = fs.readFileSync(filePath, 'utf8');
    res.end(data);
  }        

  req.on('data', chunk => {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    
    console.log(`Data chunk available: ${chunk} - header: ${JSON.stringify(req.headers['x-secret'])}`);

    const content = JSON.parse(chunk);
    content.secret = req.headers['x-secret'];

    fs.appendFile(filePath, JSON.stringify(content), err => {
      if (err) {
        console.error(err);
      }
    });

    res.end();
  });
    
}).listen(port);