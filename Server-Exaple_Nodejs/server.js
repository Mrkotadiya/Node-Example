const express = require('express');
const app=express();
app.use(express.json());

//  app.use(express.json()); 


let port =process.env.PORT || 1111;
app.listen(port,(req,res) => {
    console.log(`server port ${port}`);
})
