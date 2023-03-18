const mongoose  = require('mongoose');

let userschema=new mongoose.Schema({
    name:{type:"string",required:"true"},
    pwd:{type:"string",required:"true"}
});

let schema=new mongoose.model("user",userschema);

module.exports=schema;


// const express = require('express');
// const mongoose = require('mongoose');

// let collect = new mongoose.Schema({
//     name:{type:String, required:true},
//     pwd:{type:String}
// });

// const nir=new mongoose.model("nirbhay",collect);

// module.exports=nir;