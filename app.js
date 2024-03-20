const http = require('http')
http.createServer((req, res)=>{
    res.write("<h1>Hello Khan</h1>")
    res.end();
}).listen(4500)