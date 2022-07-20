const axios = require('axios');

axios.get("http://localhost:8000/students").then((resp)=>{
return resp.json()
}).then((data)=>console.log(data))