const axios = require('axios');

axios.get("http://localhost:8000/students").then((resp)=>{
return resp.data
}).then((data)=>console.log(data))