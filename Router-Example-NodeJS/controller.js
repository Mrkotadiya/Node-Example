const express = require('express');

const nir= require("./schema");

exports.insert=(async(req,res)=>{
    console.log(req.body);
    await nir.create(req.body).then(data=> res.send(data));
})

exports.update=(async(req,res)=>{
    await nir.updateOne({name:req.body.name},{$set:{pwd:req.body.pwd}});
})

