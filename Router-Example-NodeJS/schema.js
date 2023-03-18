// // const express = require('express');
// const mongoose = require('mongoose');

// let collect = new mongoose.Schema({
//     name:{type:String, required:true},
//     pwd:{type:String}
// });

// const nir=new mongoose.model("nirbhay",collect);

// module.exports=nir;


db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )

db.inventory.find( { price: { $not: { $gt: 1.99 } } } )

db.inventory.find( { $nor: [ { price: 1.99 }, { sale: true } ]  } )

db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )





