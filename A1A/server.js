const express = require('express');
const app=express();
app.use(express.json());

const router=require("./Router/router");
app.use("/hi",router);

const port= process.env.PORT || 3333;
app.listen(port,() => {
    console.log(`server ;listing port ${port}`);
});