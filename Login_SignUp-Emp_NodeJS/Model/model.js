const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{type: 'string',unique: true,required: true},

    pwd:{type: 'string',required: true,minLength:5}

})
const userModel= new mongoose.model("userdata",userSchema);

module.exports =userModel;