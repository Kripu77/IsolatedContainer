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
function template(data){
    const htmlTemp = `<div>
    <h1> Student Names: </h1>
    <br/>
    <h2> ${data.name}</h2>
     </div>`
     return htmlTemp
}

app.get("/student/search", (req, res)=>{

    console.log(req.query);
    const queryParams = req.query;
    let sortedStudents = [...data]
    const string = 'Hello'
    console.log(string.toLocaleLowerCase().startsWith('h'))

    sortedStudents = sortedStudents.filter((student)=>{
        console.log(student.name)
        return student.name.toLowerCase().startsWith(queryParams.startsWith)
    })
    console.log(sortedStudents)
    const studentList = sortedStudents.slice(0,queryParams.limit).map((student)=>{ 
       
        return template(student)
    })

    res.send(`<h1> view list of students available ${studentList}</h1>`);

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

