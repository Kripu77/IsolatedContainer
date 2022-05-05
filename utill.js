// we will use util module in this section

// const util = require('util');
// const fs = require('fs');

// const first = util.promisify(fs.readFile)
// const second = util.promisify(fs.readFile);


// const start= async()=>{

//     await first('./test/sub/text.txt', 'utf-8', ()=>{

//     })
// }

// const util = require('util')
// const fs = require('fs');


//we will simply use the native promisify method to obtain promises from the file system async read file
// const fileReader = util.promisify(fs.readFile);
// const fileWriter = util.promisify(fs.writeFile);

// // console.log(fileReader())
// //chain them in the async await function

// const start = async()=>{


//     try{
        
//         const firstFile = await fileReader('./test/sub/text.txt', 'utf-8',(err, res)=>{
// console.log(res + 'hello here')
//         })
//     const secondFile = await fileReader('./test/sub/written.txt', 'utf-8')
//     //write file 
//     // console.log(firstFile)

// await fileWriter('./test/sub/promisify.txt', `${firstFile} ${secondFile}`)}
// catch(err){
//     console.log(err)
// }

// }



// start()
//invoke the fn start



// const util = require('util');
// const fs = require('fs');

// //promisify our fs modules readFile and WriteFile methods

// const fileReader = util.promisify(fs.readFile);
// const fileWriter = util.promisify(fs.writeFile);

// // console.log(fileReader('./test/sub/text.txt', 'utf-8').then((data)=>console.log(data)))


// //use async await to make it appear cleaner

// const startApp = async()=>{

// const firstFile = await fileReader('./test/sub/text.txt', 'utf-8')

// console.log(firstFile)

// }

// startApp()

// const EventEmitter = require('events');


// //since it is an class instance, we hence cerate a new instance

//  const customEmitter = new EventEmitter();

//  customEmitter.on('response',()=>{
//      console.log('datareceived')
//  })

//  customEmitter.emit('response')
// const eventEmitter = require('events')

// const customEmitter = new eventEmitter();

// customEmitter.on('responsex', ()=>{
// console.log( 6+3)
// })

// customEmitter.emit('responsex')

// const eventEmitter = require('events');

// const customeEmitter = new eventEmitter();
// //what event to respond
// customeEmitter.on('click of a button', ()=>{
//     console.log('Hey you clicked me')
// })
// //what to emit

// customeEmitter.on('click of a button', ()=>{
//     console.log("All buttons are being called")
// })

// customeEmitter.on("click of a button", () => {
//   console.log("I am clicked too");
// });
// customeEmitter.emit('click of a button')\


// // const event = require('events');

// // const customEvent = new event();

// // customEvent.on('click', (name, age)=>{
// //     console.log(`The name of the user is ${name} and he is ${age} years old`)
// // })


// // customEvent.emit('click', 'Kripu', 22)


// //sample with http server

// const http = require('http');

// // http.createServer((req, res)=>{

// //     res.write("hello this is me the mighty server")
// //     res.end();

// // }).listen(8000)

// //the above mentioned can be reitreated with event api
// const server =http.createServer();
// server.on('click', ()=>{
//  res.end('hello')
// }).listen(8000)

// const fs = require('fs');

// const util = require('util');

// const filReaderA = util.promisify(fs.readFile);

// async function test(){
//   const data=  await filReaderA("./test/sub/bigData.txt", 'utf-8')
//   console.log(data)
// }

// //  fs.readFile('./test/sub/bigData.txt', "utf-8", (err, res)=>{
// // if(err) throw err;
// // if(res) console.log(res)
// // })

// test();

const {createReadStream} = require('fs');

const stream = createReadStream('./test/sub/bigData.txt', {highWaterMark:900000, encoding:'utf-8'});

stream.on('data', (res)=>{

    console.log(res);

})

stream.emit('data')