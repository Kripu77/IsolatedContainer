const http = require('http');
const fs = require('fs');
const util = require("util")
const fileReader = util.promisify(fs.readFile);


const dataxx = async()=>{
const fileReaderxx=await fileReader("../test/sub/file.txt", {encoding:"utf-8"})
console.log(fileReaderxx)
}

console.log(dataxx())

http.createServer((req, res)=>{

}).listen(3000)