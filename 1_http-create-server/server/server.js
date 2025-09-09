const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    let filePath = "";
    switch(request.url) {
        case "/":
            filePath = "../index.html"
            break;
        case "/about":
            filePath = "../about.html"
            break;
        case "/contact":
            filePath = "../contact.html"
            break;
        default:
            filePath = "../notfound.html"
            break;
    }
    let data = fs.readFileSync(filePath, 'utf-8');
    response.end(data);
});
const port = 8000;

server.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
});

// file = open, openSync, readfile, write, append, update, rename, unlink, unlinkSync, close