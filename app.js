// const http = require('http');
// const port =8080;

// http.createServer((req, res)=>{
//     if(req.url === '/') res.end('You are in the homepage')
//     // res.end(req.url)
//     if(req.url ==='/about') res.end('you are in the about page')
// //     console.log(req.url)
// //    res.write("node server running.")
// // res.end();
// }).listen(port)

// console.log("Hello")
// console.log("Nodemon is watching you")

// const path = require('path');

// const dire = path.resolve(__dirname, './test', 'sub', 'text.txt')

// console.log(`The absolute path of the file mentioned is ${dire}`)

//file system async example

const fs = require("fs");
const http = require('http');

fs.readFile("./test/sub/written.txt", "utf-8", ( err, res) => {
  if (err) throw err;

  if (res) {
   fs.readFile('./test/sub/text.txt', 'utf-8', (err, resu)=>{
       if(err) throw err;

       if(resu){
           fs.writeFile('./test/sub/async.html', `<h1> ${res} ${resu} </h1>`, (err, result)=>{

            if(err) throw err

            else{
                http.createServer((req, resp)=>{

                    resp.write(
                      `<h1>
                    
                        ${res} ${resu}`
                    );
                    resp.end();

                }).listen(8080)
            }

           })
       }


   })
  }
});
