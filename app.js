const http = require('http')
const dat = require('./data')
http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(dat));
    res.end();
}).listen(5000);
console.log("new changes")