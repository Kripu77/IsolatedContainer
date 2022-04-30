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

// // const path = require('path');

// // const dire = path.resolve(__dirname, './test', 'sub', 'text.txt')

// // console.log(`The absolute path of the file mentioned is ${dire}`)

// //file system async example

// const fs = require("fs");
// const http = require("http");

// fs.readFile("./test/sub/written.txt", "utf-8", (err, res) => {
//   if (err) throw err;

//   if (res) {
//     fs.readFile("./test/sub/text.txt", "utf-8", (err, resu) => {
//       if (err) throw err;

//       if (resu) {
//         fs.writeFile(
//           "./test/sub/async.html",
// //           `<h1> ${res} ${resu} </h1>`,
// //           (err, result) => {
// //             if (err) throw err;

// //             else {
// //                 console.log("the server instance is being created");
// //               http
// //                 .createServer((req, resp) => {
// //                     console.log(req.url)
// //                     console.log('server created and running on port 8080')
// //                   resp.write(
// //                     `<h1>

// //                         ${res} ${resu}`
// //                   );
// //                   resp.end();
// //                 })
// //                 .listen(8080);
// //             }
// //           }
// //         );
// //       }
// //     });
// //   }
// // });
// // const a = 1
// // const b = 2;

// // const time= setTimeout(()=>{
// // console.log( a+b)
// // }, 4000)

// // // console.log(time)

// // console.log("This will run 1st");
// // console.log('I will one day be a great developer- Kripu @2022')

// // console.log(setTimeout(()=>{},5000))

// // console.log(fetch('hello'))

// //promises in node js

// const fs = require('fs');
// function getData(path){
//  return new Promise((resolve, reject) => {

//     if(reject){
//         console.log(reject)
//         console.log('no data found')
//     }
//     else{
//         resolve(path)
//     }
// });
// }

// getData('./test/sub/text.txt')
// .then((resp)=>{

// fs.readFile(resp, 'utf-8', (err, res)=>{
//     console.log(res)

// })
// })

// const fs = require('fs');

// const getData=(path)=>{
// return new Promise((resolve, reject)=>{

// fs.readFileSync(path, 'utf-8', (err, res)=>{
// if(err) reject(err)
// if(res) resolve(res);

// })

// })

// }

// getData('./test/sub/text.txt').then((resp)=>{
//     console.log(resp).catch((err)=>console.log(err))

// })

const fs = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    //read file using the fs module

    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./test/sub/text.txt").then((data) => {
//   console.log(data);
// });



//using async await approach

const start= async()=>{

  try{  const firstFile = await getText('./test/sub/text.txt')
    console.log(firstFile)

    const secondFile = await getText('./test/sub/written.txt')
    console.log(secondFile)

    fs.writeFile('write.html', `<h1> New file ${firstFile} </h1>` , (err, result)=>{
if(err){
    throw err
}
    })


}
catch(err){
    console.log(err)
}
}

start()