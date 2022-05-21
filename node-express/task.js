const cron = require('node-cron');

cron.schedule("1-5  * * * *", ()=>{
    console.log("This task will run every minute")
})