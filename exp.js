const express = require('express')
const users = require('./MOCK_DATA.json')
const app = express();


app.get('',(req, res)=>{
    res.send("<h1>welcome to Home Page</h1>")
})
app.get('/users',(req, res)=>{
    const html = `
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}</ul>
    `;
    res.send(html);
})
// REST API
// fetch all users from json file
app.get('/api/users',(req, res)=>{
    return res.json(users)
})
//GET /api/users/1 - Get the user with ID 1
app.route('/api/users/:id')
.get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})
.patch((req, res)=>{
    // edit user with id
    return res.json({status:"Pending"})
})
.delete((req, res)=>{ 
    // delete user with id
    return res.json({status:"Pending"})
});


app.post('/api/users', (req, res)=>{
    // create new user
    return res.json({status:"Pending"})
})

app.listen(5000)