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
// // // if(res) console.log(res)
// // // })

// // // test();

// const {createReadStream} = require('fs');

// const stream = createReadStream('./test/sub/bigData.txt', {highWaterMark:100});

// stream.on('data', (res)=>{

//     console.log(res);

// })

// stream.emit('data')

// // const {createReadStream} = require('fs');

// // const stream = createReadStream('./test/sub/bigData.txt'
// // )

// // stream.on('Data received', (resp)=>{
// // console.log(resp)
// // })

// // stream.emit('Data received')
// // const {createReadStream} = require('fs');

// // const stream = createReadStream('./test/sub/bigData.txt', {highWaterMark:1000, encoding:'utf-8'});

// // stream.on('data', (res)=>{

// //     console.log(res)
// // })
// // stream.emit('data')

// // const {createReadStream} = require('fs');

// // const stream = createReadStream('./test/sub/file.txt');

// // stream.on('data', (res)=>{

// //     console.log(res.length);

// // })

// // const event = require('events');

// // const eventEmitter = new event();

// // eventEmitter.on('data', (nodemxx)=>{
// //     console.log(nodemxx)
// // })

// // eventEmitter.emit('data', 'badBunny')

// const http = require('http');
// const {createReadStream} = require('fs')

// const data=[]

// const port =8080;

// const server = http.createServer((req,res)=>{

// const stream = createReadStream("./test/sub/bigFile.txt", {
//   encoding: "utf-8",
// });

// stream.on("data", () => {
//  stream.pipe(res)
// });

// // stream.on('error', (err)=>{
// //     console.log(err)

// // })
// // })

// // server.listen(port)

// const fs = require('fs');
// const http = require('http');
// const path = require('path')

// // console.log(path.resolve(__dirname))
// //create a server

// const server = http.createServer((req, res)=>{

//     //initialise our stream

//     const stream = fs.createReadStream('./test/sub/bigFile.txt', {encoding:'utf-8'})

//     stream.on('data packets', ()=>{
//         stream.pipe(res)
//     })

//     stream.on('error', (err)=>console.log(err))

// })

// server.listen(3000)

// const {createReadStream} = require('fs');
// // const {createServer} = require('http');

// // const port = 3000;

// // const server = createServer((req, res)=>{

// //initialise stream

// // const stream = createReadStream('./test/sub/bigFile.txt')
// // stream.on('data', ()=>{
// //    stream.pipe(res)
// // })

// // stream.on('error', (err)=>{
// // console.log(err)
// // })

// // })

// // server.listen(port)

// // const onjectxx = [

// //   {data:"Bottled Water",
// //   word:10
// //   },
// //    {data:"Apple Juice",
// //   word:9.2
// //   },
// //    {data:"Big Mac",
// //   word:2
// //   }

// // ]

// // const fs = require('fs');
// // // fs.writeFile('./test.csv', `products, price\n`, (err, res)=>{
// // //    console.log(err)
// // // })
// // function dataWriter (onject, path){

// //    onject.map((value, index) => {
// //      console.log(value.data);

// //      fs.writeFile(
// //        path,
// //        `${value.data}, $${value.word} \n`,
// //        { flag: "a" },
// //        (err) => {
// //          console.log(err);
// //        }
// //      );
// //    });
// // }

// // dataWriter(onjectxx, "./test.csv")
// // const fs = require('fs');

// // const fileReader = fs.createReadStream('./test/sub/text.csv', {encoding:'utf-8'})

// // fileReader.on('data', (data)=>{

// //    fs.writeFile('./data.csv', data, (err)=>{
// // console.log(err)
// //    })
// // })

// // const fs = require('fs');

// // const streamReader = fs.createReadStream('./test.xlsx',{encoding:'utf-8'})

// // streamReader.on('data', (res)=>{
// // console.log(res)
// // })

// // streamReader.on('error', (err)=>{
// //    console.log(err)
// // })

// // const fs = require('fs')
// // const http = require('http')

// // const port =8080;

// // const server = http.createServer((req, res)=>{

// //    // const fR = fs.readFile('./test.csv', 'utf-8', (err, data)=>{

// //    //    res.end(data)
// //    // })
// // //   const streamDataSender= fs.createReadStream('./test/sub/bigFile.txt');

// // //   streamDataSender.on('data', ()=>{

// // //    streamDataSender.pipe(res)
// // //   })

// // // // })

// // // // server.listen(port)

// // // const http = require('http');
// // // const fs = require('fs');

// // // const homepage = fs.readFileSync('test/sub/async.html')

// // // const port =8080;

// // // const server = http.createServer((req,res)=>{

// // // console.log(req.method)
// // // console.log(req.url)

// // // res.writeHead(401, { "content-type": "text/link" });

// // //    if(req.url === '/'){

// // // res.end("https:/www.kripukhadka.com")

// // //    }

// // //  if(req.url==='/about')  {

// // // res.write("<h1> About Page... </h1>")
// // //    }

// // //    else{
// // //       res.writeHead(401, { "content-type": "text/plain" });
// // // res.write("no docs found");

// // //    }

// // //    res.end();

// // // // })

// // // // server.listen(port)

// // // // const data = [1,2,3];
// // // // const string ="Kripu";
// // // // const number =123;
// // // // const object ={
// // // //    key:'value'
// // // // }
// // // // console.log(data)
// // // // console.log(!data )

// // // // console.log(typeof data)
// // // // console.log(typeof string)
// // // // console.log(typeof number)
// // // // console.log(typeof object)

// // // const exceljs = require('exceljs');

// // // console.log(exceljs)

// // // //new workbook

// // // const workbook = new exceljs.Workbook();
// // // workbook.creator = 'Kripu Khadka';
// // // workbook.lastModifiedBy ='Bot';
// // // workbook.created = new Date(2022, 06, 02);
// // // workbook.modified = new Date();
// // // workbook.lastPrinted = new Date()

// // // // //const worksheet = workbook.addWorksheet('New Sheet');

// // // // //config for worksheet
// // // // const worksheet = workbook.addWorksheet('New Sheet', {
// // // //   headerFooter: {oddFooter: "Page &P of &N", oddHeader: 'Odd Page'}
// // // // });
// // // // worksheet.columns = [
// // // //   { header: "Id", key: "id" },
// // // //   { header: "Name", key: "name" },
// // // //   { header: "Age", key: "age" },
// // // // ];

// // // // // const idCol = worksheet.getColumn("id");
// // // //  const nameCol = worksheet.getColumn("B");
// // // // // const ageCol = worksheet.getColumn(3);
// // // // const data = ["store"]

// // // // const row = worksheet.addRows([

// // // //    ["Kripu", "Khadka", "hola" ,"\n", "New", "Line"],

// // // // ]);

// // // // //await workbook.xlsx.writeFile(filename);
// // // // async function test(){
// // // // await workbook.xlsx.writeFile("exceljs.xlsx");
// // // // }
// // // // test();
// // // function getLocation() {
// // //   if (navigator.geolocation) {
// // //     navigator.geolocation.getCurrentPosition(showPosition);
// // //   } else {
// // //     console.log( "Geolocation is not supported by this browser.");
// // //   }
// // // }
// // // function showPosition(position) {
// // //   console.log( "Latitude: " +
// // //     position.coords.latitude +
// // //     "<br>Longitude: " +
// // //     position.coords.longitude)

// // // }

// // // getLocation()

// // // const string = "Hi my name is kripu"

// // // console.log(string.replace(" ", ""))
// // // console.log(string.split(" ", 5));

// // const fullDate = new Date();

// // const tomorrowsDate = new  Date("2022-06-02")
// // console.log(tomorrowsDate)
// // console.log(fullDate)

// const fs = require('fs')
// function converToMinutes(s) {
//   let c = s.split(":");
//   return parseInt(c[0]) * 60 + parseInt(c[1]);
// }

// function parseTime(s) {
//   return Math.floor(parseInt(s) / 60) + ":" + (parseInt(s) % 60);
// }

// function fifteenMinSub(closeHour) {
//   if (closeHour === "CLOSED") {
//     return "CLOSED";
//   } else {
//     let timeToSubtract = 15;
//     let startTime = converToMinutes(closeHour === "0:00" ? "24:00" : closeHour);
//     let converted = parseTime(startTime - timeToSubtract);
//     return converted;
//   }
// }

// function formatChecker(arr) {
//   const arrx = arr.split("");

//   if (arrx.length > 4) {
//     const value = arrx[0] + arrx[1];
//     return value;
//   } else {
//     return arrx[0];
//   }
// }

// function formatMatcher(value){
//    const arrx = value.split("");
//    if (arrx.length > 4) {
//      return '';
//    } else {
//      return '"';
//    }

// }

// //data cleaner and prep fn
// function uberDataPrep(dayHour, previousValue) {
//   let timeNumParser = formatChecker(dayHour);
//   if (timeNumParser <= 5 && timeNumParser > 0) {
//     return `10:45-23:59${formatMatcher(previousValue)},"00:00-0${dayHour === "5:00" ? "4:59" : fifteenMinSub(dayHour)}`;
//   } else {
//     if (dayHour === "CLOSED") {
//       return "CLOSED";
//     } else {
//       return `10:45-${fifteenMinSub(dayHour)}${
//         timeNumParser <= 5 && timeNumParser > 0?'"':''
//       }`;
//     }
//   }
// }

// // console.log(uberDataPrep("1:00", "23:00"));
// // console.log(uberDataPrep("5:00", "1:00"));

// const testValue = [
//   `${uberDataPrep("23:00","23:00")}`,
//   `${uberDataPrep("5:00","23:00")}`,
//   `${uberDataPrep("5:00","5:00")}`,
//   `${uberDataPrep("5:00","5:00")}`,
//   `${uberDataPrep("5:00","5:00")}`,
//   `${uberDataPrep("5:00","5:00")}`,
// //   `${uberDataPrep("5:00","5:00")}\n`,
// // ];
// // console.log(testValue[testValue.length-1].replace('"', "\n"))
// // const value = testValue[testValue.length - 1].replace('"', "\n");
// // const arrayised = Array.from(value)

// // console.log(arrayised);

// // let data = [
// //   "10-45-23:45",
// //   "10-45-22:45",
// //   "10-45-20:45",
// //   "10-45-23:45",
// //   "10-45-23:59,00:00-04:59",
// //   "10-45-23:59, 00:00-04:59",
// //   "10-45:22:45",
// // ];

// // // data = data.flatMap((s) => s.split(/,\s*/));
// // // console.log(data);
// // const testValue = [
// //   `${uberDataPrep("23:00")}`,
// //   `${uberDataPrep("22:00")}`,
// //   `${uberDataPrep("22:00")}`,
// //   `${formatMatcher("5:00")}${uberDataPrep("5:00")}`,
// //   `${uberDataPrep("5:00")}`,
// //   `${uberDataPrep("5:00")}`,
// //   `${uberDataPrep("23:00")}${formatMatcher("5:00")}\n`,
// // ];

// // let data = [
// //   "10-45-23:45,00:00-04:58",
// //   "10-45-22:45,00:00-04:58",
// //   "10-45-20:45,00:00-04:58",
// //   "10-45-23:45,00:00-04:58",
// //   "10-45-23:59,00:00-04:58",
// //   "10-45-23:59, 00:00-04:59",
// //   "10-45:22:45,00:00-04:58",
// // ];
// let header = [
  
//          "ID", "MENU",
//           "TRUE",
// ]
// let data = [
//   "10-45-23:59",
//   "10-45-23:59",
//   "10-45-23:59",
//   "10-45-23:59",
//   "10-45-23:59",
//   "10-45-23:59,00:00-04:59",
//   "10-45-23:59,00:00-04:59",
// ];


// // let compiled=[];
// // header.push(...data)
// // compiled.push(...header)
// // console.log(compiled)


// function dataInverse(data) {
//   let result = data.map((s) => s.split(/,\s*/));

//   // Only change something when there is an item that does not have doubly entry
//   if (result.some(({ length }) => length <= 2)) {
//     // must rotate second items
//     let overflow;
//     [result, overflow] = result.reduce(
//       ([acc, prev], parts) => [
//         [...acc, [`${parts.shift()}`, ...prev].join(",")],
//         parts,
//       ],
//       [[], []]
//     );

//     // What drops off at the end, should be inserted at the start
// //     result[0] = [result[0], ...overflow].join(",");
// //     //  add \n to the last index of the array
    
  
// //   }
// //   result.push(`\n`);
// //   // only insert "" if the string matches the 24*7 fromat
// //   const formatted = result.map((string) => {
// //     return string.length <= 20 ? string : `"${string}\"`;
// //   });
// //   return formatted;
// // }

// // console.log(dataInverse(data))
// //  header.push(...dataInverse(data))

// //  console.log(header)

// //  let datex = "2022-06-22";

// //  const replaced= datex.replaceAll("-", ".")

// //  console.log(replaced)
// // let result = data;
// //  const formatted = result.map((string) => {
// //    return string.length <= 20 ? string : `\"${string}\"`;
// //  });

// //  console.log(formatted)

// const header = [
//   ["3890", "Temproray Store Closure Activation", "9:00", "7:00"],
//   ["3431", "9:00", "7:00", "id"],
//   ["3441", "9:00", "7:00", "id"],
// ];

// const newcc = header.filter((vlaue)=>{

//   return !vlaue === vlaue.includes('Temproray Store Closure Activation') ;

// })

// console.log(newcc)


let contentful = require('contentful');

//client initialization

let client = contentful.createClient({
  space: "s59oscfk00b4",
  accessToken: "VcL6-995jJ8lnJULQ_S27cDHMULZDAVExLHgpNza7Mg",
});


client.getEntries().then((response) => console.log(response.items))
.catch(console.error)


// console.log(entries.items[2].fields.title);


