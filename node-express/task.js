const express = require('');
const app = express();



//first midleware which will define if the middleware has access to the req and res cycle

const consoleLogger = (req, res, next)=>{


console.log("I have to the acess, green tick to go");
next();

}


//get the time when the request is being made using middleware

const timeGetter =(req, res, next)=>{

   req.timeGetter = Date.now();
   console.log(req.timeGetter)
    next();

}

app.use(consoleLogger);
app.use(timeGetter)


//simple get route

app.get("/", (req, res)=>{


    deafultRes= `The user accessed the site at ${req.timeGetter}`
    deafultRes +="<h1> Express JS makes backend development a piece of cake </h1>"
    res.send(deafultRes);


})


//listen at port 8000

app.listen("8000", ()=>{
    console.log("App running at port 800")
})