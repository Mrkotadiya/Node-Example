const express = require('express');
const mongoose=require('mongoose');
var  app=express();


const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extends:true}));


app.use(express.json());


mongoose.connect("mongodb://localhost:27017/UserDB").then("Connected").catch(error=>res.send(error));


const Route = require("./routers/router");
app.use("/",Route);



var port =process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server listing port no ${port}`);
})

// fallback fun
app.use("/",(req,res)=>res.send("no page"));

