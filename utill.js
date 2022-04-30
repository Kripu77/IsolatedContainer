// we will use util module in this section

// const util = require('util');
// const fs = require('fs');

// const first = util.promisify(fs.readFile)
// const second = util.promisify(fs.readFile);


// const start= async()=>{

//     await first('./test/sub/text.txt', 'utf-8', ()=>{

//     })
// }

const util = require('util')
const fs = require('fs');


//we will simply use the native promisify method to obtain promises from the file system async read file
const fileReader = util.promisify(fs.readFile);
const fileWriter = util.promisify(fs.writeFile);

// console.log(fileReader())
//chain them in the async await function

const start = async()=>{


    try{
        
        const firstFile = await fileReader('./test/sub/text.txt', 'utf-8',(err, res)=>{
console.log(res + 'hello here')
        })
    const secondFile = await fileReader('./test/sub/written.txt', 'utf-8')
    //write file 
    // console.log(firstFile)

await fileWriter('./test/sub/promisify.txt', `${firstFile} ${secondFile}`)}
catch(err){
    console.log(err)
}

}



start()
//invoke the fn start

