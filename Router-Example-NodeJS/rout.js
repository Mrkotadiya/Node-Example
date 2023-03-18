const express = require('express');
const mongoose = require('mongoose');

const controller=require('./controller');

const router=express.Router();

mongoose.connect("mongodb://localhost:27017/meet")


router.post("/insert",controller.insert);
router.put("/update",controller.update);


module.exports = router;