const express = require('express');
const app = express();
const {readFile}= require('fs');
const util = require('util');
const fileReader = util.promisify(readFile);
const {data } = require('./data/road.js')
const path = require('path');
const errorHtml = path.resolve(__dirname, "../public/404.html")

//server static index.html page with required CSS 
app.use(express.static("../public"))


//homepage
app.get("/home", (req, res)=>{
res.send("<h1> This is our homepage</h1> <a href='/api/students'> See the list of students </a>")
})

//all students routes

app.get("/api/students", (req, res)=>{

    res.status(200).json(data)
})


//get single student data

app.get("/api/students/:id",(req, res)=>{
    
const {id} = req.params
console.log(id)

const newData = data.find((singleStudent)=>{
  return singleStudent.no === Number(id)

})
if (!newData) {
  return res.status(404).send("Not Found");
}


return res.status(200).json(newData)


})

//the query string parameter

app.get("/api/v1/query", (req, res)=>{

  const {search, limit}= req.query;
  console.log(req.query)

 let sortedProducts = [...data];

 if(search){
sortedProducts.filter((datxx)=>{
return datxx.name.includes(search)
})
 }

 if(limit){
 sortedProducts=  sortedProducts.slice(0, Number(limit))
 }

 res.json(sortedProducts)
})
// //catch all routes
app.get("*", (req, res)=>{

    res.status(404).sendFile(errorHtml)})

app.listen(8080, ()=>{
    console.log("Server running on port 8080")
})