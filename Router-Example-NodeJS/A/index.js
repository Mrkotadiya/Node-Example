const express = require('express');
const app=express();
app.use(express.json());

const Router= require("./module");
app.use("/enter",Router);


let port = process.env.PORT || 1234;
app.listen(port,()=>{
    console.log(`server listening port no ${port}`);
})