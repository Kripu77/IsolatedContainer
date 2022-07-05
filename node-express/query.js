//initialise express
const express = require('express');
const app = express();
const port = 8080;
const {data} = require("./data/road")


//home route

app.get("/",(req, res)=>{
res.status(200).send("<h1> Welcome to the Home Page </h1>");

})


//query params

app.get("/student/search", (req, res)=>{

    console.log(req.query);

    res.send("<h1> view list of students available </h1>");

})
//catch all route

app.get("*", (req, res)=>{

    res.status(404).send("<h1> The page that you're looking for doesn't exist </h1>")

})
//server running on specified port

app.listen(port, (res, err)=>{
    if(err) throw err
    else console.log(`server running on port ${port}`)
})

