const express = require('express');
const app = express();
const{ home, catchAll, handleLogin} = require("./handlers/routeHandlers");
const port = 8000;

//middleware to the get the login static page
app.use(express.static("static"))


//built in body parser
app.use(express.urlencoded({extended:false}))

//home route
app.get("/", home);

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