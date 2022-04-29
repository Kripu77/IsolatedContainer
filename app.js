const http = require('http');
const port =8080;

http.createServer((req, res)=>{
    if(req.url === '/') res.end('You are in the homepage')
    // res.end(req.url)
    if(req.url ==='/about') res.end('you are in the about page')
//     console.log(req.url)
//    res.write("node server running.")
// res.end();
}).listen(port)