const express = require('express');
const app = express();
const {home, catchAll} = require("./handlers/controllers");
const { homeRouter } = require('./routes/home');
const {router} = require("./routes/students")
const port = 8080;


//body parser middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//students route middleware
app.use("/api/students/", router )
//home route middleware
app.use("/", homeRouter);
//catch all routes middleware
app.use("*", catchAll);


//server 
app.listen(port, (err, res)=>{
    if(err) throw err;
    else console.log(`Server Runnin on port ${port}`)
})
