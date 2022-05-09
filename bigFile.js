// const {writeFileSync} = require('fs');


// for(let i=0; i<10000000; i++){

//     writeFileSync("./test/sub/bigData.txt", `Data number ${i} \n`, {flag:'a'})
// }









const {writeFile} = require('fs');
async function test (){

for (i = 0; i < 100000; i++) {
  writeFile(
    "./test/sub/bigFile.txt",
    `File number ${i}\n`,
    { flag: "a" },
    (err, res) => {
    }
  );
}



}

test();
















