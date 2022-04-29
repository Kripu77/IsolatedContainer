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

const {readFileSync} = require('fs');
console.log(readFileSync())