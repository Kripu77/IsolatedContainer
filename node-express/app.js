const express = require('express');
const app = express();
const{ home, catchAll, handleLogin, students} = require("./handlers/routeHandlers");
const port = 8000;

//middleware to the get the login static page
app.use(express.static("static"))


//built in body parser
app.use(express.urlencoded({extended:false}))

//json data
app.use(express.json())

//home route
app.get("/", home);

//get all students
app.get("/students", students)

//login
app.post("/login", handleLogin )

//catch all routes
app.get("*", catchAll);

//start server
app.listen(port, (err, res)=>{

    if(err) throw err;
    else{
        console.log(`Server running on port ${port}`)
    }

})