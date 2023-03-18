const express = require('express');
const controller = require('../controller/controller');
const Router = express.Router();

// API  
Router.post("/signUp",controller.signUp);

Router.post("/login",controller.login);

Router.get("/",controller.Alldatafind);




module.exports=Router;