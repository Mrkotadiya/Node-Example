const express=require('express');

const schema=require("./schema");

exports.signup=(async(req,res)=>{
    await schema.create(req.body).then(data=>res.send(data));
});