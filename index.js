const express = require('express');
require('dotenv').config();
const app = express();

app.get('/',(req,res)=>{
    res.send("hello world")
});

app.get('/twitter',(req,res)=>{
    res.send("<h1>hi twitter</h1>")
})

app.listen(process.env.PORT,()=>{
    console.log(`server started at port: ${process.env.PORT}`);
})