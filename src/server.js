const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json())
console.log(__dirname);
console.log(__filename);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/user',(req,res)=>{
    res.send("User Page Here !!");
});

app.get('/about',(req,res)=>{
    res.send("<h1>Tells more about Website. </h1>");
});

app.post('/saveUser', (req,res)=>{
    console.log(req.body);
    res.send("data saved successfully !");
})

app.listen(3000, ()=>{
    console.log("Server up and running on port 3000");
})