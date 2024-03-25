const http = require('http')
http.createServer((req, res)=>{
    res.write("<h1>hello Mr. Zeeshan</h1>");
    res.end();
}).listen(5000)
console.log("server is listen on port# 5000 ")