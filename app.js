const http = require('http')
const date = require('./data')
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(date));
    res.end();
}).listen(5000);
console.log("new changes")