const express= require("express");
const users= require("./MOCK_DATA.json");
const app=express();


app.get('/users',(req,res)=>{
    return res.json(users);
})

app.get('/api/users', (req, res) => {
    const html = `
    <ul>
       ${users.map((user) => {
        return `<li>${user.first_name}</li>`;
       }).join('')}
    </ul>
    `;
    res.send(html);
});
//use app.route for get post patch and delete
app.get('/api/users/:id', (req, res) => {
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
});

app.post('/users',(req,res)=>{
    return res.json({status:"pending"});
});

app.patch('/api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
});

app.delete('/api/users/:id',(req,res)=>{
    return res.json({status:"pending"});
});

app.listen(8000,()=>
     {console.log('Server Started at PORT')}
);