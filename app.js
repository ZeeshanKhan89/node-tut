const http = require('http')
http.createServer((req, res)=>{
    res.write("<h1>Hello azan khan</h1>")
    res.write("<h1>Hello, I am developer(InshaAllah)</h1>")
    res.end();
}).listen(5000);
console.log("new changes")