const mongoose = require('mongoose');

const nirbhudas = new mongoose.Schema({
   name:{type:String,require:true},
   rollno:{type:String,require:true}
});


const schema=new mongoose.model("StudentData",nirbhudas);

module.exports =schema;