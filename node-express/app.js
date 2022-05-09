const express = require('express');

const app = express();

// console.log(app);

app.get('/', (req, res)=>{
res.send('get request performed')
})

app.listen(5000, ()=>{
console.log("express server running on port 5000")
})