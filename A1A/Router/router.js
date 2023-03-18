const express=require('express');
const mongoose=require('mongoose');

const controller = require("../Controller/controller");

const UserRouter=express.Router();

UserRouter.get("/show",controller.find); 
UserRouter.post("/signup",controller.signup);

mongoose.connect("mongodb://localhost:27017/meet").then("connected").catch(err=>res.send(err));


module.exports=UserRouter;
