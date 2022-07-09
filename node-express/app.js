const express = require('express'); 
const fs = require('fs');
const { ppid } = require('process');
const app = express();
const util = require('util')
const promisifiedReader = util.promisify(fs.readFile)
const port = 8080;
const data = [];

async function test(){
data.push(await promisifiedReader("../test/sub/file.txt", {encoding:"utf-8"}))
}
test();



app.get("/", (req, res)=>{

//     const file =  fs.readFile("../test/sub/file.txt", {encoding:"utf-8"}, (err, data)=>{
// console.log(data)
        res.json(data)

    
})

app.get("/about",(req, res)=>{
res.send('<h1> this is our about page </h1>')
})

app.get("*",(req,res)=>{
res.status(404).send("<h1> 404 Page not founf </h1> ")
})

app.listen(port, ()=>console.log("port running on 8080"))