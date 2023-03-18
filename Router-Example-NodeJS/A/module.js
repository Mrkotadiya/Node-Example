const express = require('express');
let mongoose=require('mongoose');

let controller=require('./controller');

let Router=express.Router();


Router.post("/signup",controller.signup);

// mongoose.connect("mongodb://localhost:27017/meet")

mongoose.connect("mongodb://localhost:27017/meet");

module.exports= Router;