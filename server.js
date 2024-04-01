const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
            return;
        }

        // Set caching headers to prevent caching
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        res.writeHead(200);
        res.end(data);
    });
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
