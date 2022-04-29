const http = require('http');
const port =8080;

http.createServer((req, res)=>{
res.write('hola')
res.end();
}).listen(port)