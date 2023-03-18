const express = require('express');
const app=express();
app.use(express.json());


const router=require("./rout");
app.use("/enter",router);


let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log(`server listing port ${port}`)
});