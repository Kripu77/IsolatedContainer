const express = require('express');
const app = express();
const {home, students, addStudent, catchAll, singleStudent, updateStudent, deleteStudent} = require("./handlers/routes")
const port = 8080;


//body parser middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//home route

app.get("/", home);

//get all students
app.get("/api/students", students);

//get single student
app.get("/api/students/:no", singleStudent)

//add new students
app.post("/api/students", addStudent);

//update existing students details
app.put("/api/students/:no", updateStudent);

//delete student details

app.delete("/api/students/:no", deleteStudent)

//catch all routes
app.get("*", catchAll);


//server 
app.listen(port, (err, res)=>{
    if(err) throw err;
    else console.log(`Server Runnin on port ${port}`)
})
