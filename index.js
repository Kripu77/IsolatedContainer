// console.log(module)

// const os = require('os')

// console.log(`The uptime of the system is ${os.uptime()*60} minutes`)

// console.log(os.userInfo().username)

// console.log(`The user of this system is ${os.userInfo().username}`)\\

// const path = require('path');

// // console.log(path)

// // // console.log(path.join('/test', 'sub', 'app'))

// // const absolute = path.resolve(__dirname, 'app.js')

// // console.log(absolute)

//file system module

// const {readFileSync} = require('fs');
// console.log(readFileSync())

const fs = require("fs");
const { writeFile } = require("fs/promises");
//  const readFile = fs.readFileSync('./test/sub/text.txt', 'utf-8' );
//  console.log(readFile)

//  const writefile = fs.writeFileSync('./test/sub/written.txt', `Here is the file written using node js ${readFile}`)
// //  fs.readFileSync

// const writeHtml = fs.writeFileSync('./index.html', '<h1> this 2nd html file is written using node.js')

// console.log(writeHtml)

// //async sample

//  fs.readFile('./test/sub/text.t', 'utf-8',(error, result)=>{
// if(error) throw error

// console.log(result)
// })

// fs.writeFile('./test/sub/hello.html', `<h1> written data at ${new Date().toDateString()} </h1>`, (err, result)=>{
// //    if(err) throw err

// //    else console.log('the file has been written');

// })
//  fs.readFile("./test/sub/written.txt", "utf-8", (err, Fresult) => {
//   if (err) throw err;
//   console.log(Fresult)
//   if (Fresult) {
//    fs.readFile("./test/sub/text.txt", "utf-8", (err, sresullt) => {
//        console.log(sresullt)
//       if (sresullt) {
//         if (err) throw err;
//         fs.writeFile(
//           "./test/sub/written.html",
//           `<h1> ${Fresult} ${sresullt} </h1>`,
//           (err, result) => {
//             if (err) throw err;
//             console.log(result)
//           }
//         );
//       }
//     });
//   }
// });

console.log("hola")