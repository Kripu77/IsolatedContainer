const express = require('express');
const app = express();
const morgan = require("morgan");
const IDS = require("../models/ids")
const {connectDB} = require('../connection/dbconnect');
const ids = require('../models/ids');
const uri =""
//logger middleare fn
app.use(morgan("tiny"))


//home route

app.get("/", (req, res)=>{

    
res.status(200).send(tasks.find({}))
 
})

//get deliveroo route

app.get("/deliveroo", (req, res)=>{



    res.status(201).json({success:true, data:"The list of all the UUIDS"})

})


//catch all routes

app.get("*", (req, res)=>{

    res.status(404).send("<h1> The page you're looking for doe not exits</h1>")

})


const startServer = async()=>{
    try{
       await connectDB(uri);

       app.listen(8000,(err, res)=>{

    if(err) throw err;


   
})

    }
    catch(err){
        console.log(err)
    }

}

startServer();
