const express = require('express')
const app = express();

app.get('',(req, res)=>{
    res.send('<h1>hello, this is main page</h1>')
})

app.get('/about',(req, res)=>{
    res.send(`
    <input type="text" placeholder="User Name"/>
    <button>Click Me</button>
    `)
})
app.get('/contact', (req, res)=>{
    res.send([{
        name: "ali",
        email: "ali@gmail.com"
    },
    {
        name: "azan",
        email: "ali@gmail.com"
    },
    {
        name: "akram",
        email: "ali@gmail.com"
    }])
})

app.listen(5000);