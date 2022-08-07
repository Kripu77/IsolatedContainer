const mongoose = require('mongoose');



  //main connection handler

 const connectDB = async(uri)=>{

   return mongoose.connect(uri)

 }

 module.exports= {connectDB}