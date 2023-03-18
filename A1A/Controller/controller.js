const express= require('express');

const schema=require('../Schema/schema');

exports.signup = (async(req,res)=>{
    await schema.create(req.body).then((req,res)=>res.sen("login succesfully")).catch((err)=>err);
})

exports.find=(async(req,res)=>{
    await schema.find({name:req.body}).then((req,res)=>res.send("find"))
}); 