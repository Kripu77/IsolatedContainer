const express = require('express');
const app = express();
const logger = require("./utils/logger")
const authorise = require("./utils/authrorize")


//logger middleware
app.use([logger, authorise])

//home route



app.get("/home",(req, res)=>{


    res.status(200).send(`<h1> This is our Homepage </h1> <a href="/about"> Click here to go to about me page </a>`)

})


//about route


app.get("/about",  (req, res)=>{

    res.status(200).send("<h1> Hi, I'm Kripu Khadka </h1>")

})


//catch all route

app.get("*", (req, res)=>{
    res.send('<h1> Page doesnot exists </h1>')

})



//sever running on sepcified port
app.listen(8000, (err, res)=>{
    console.log("server spinned in port 8000")
})