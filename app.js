const colors = require('colors')
const http = require('http')
http.createServer((req, res)=>{
    res.write("<h1>Hello</h1>")
    res.end();
}).listen(4500);
console.log("hello".black)