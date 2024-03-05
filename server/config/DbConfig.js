const mongoose = require('mongoose');

mongoose.connect(process.env.DBUrl).then(()=>{
    console.log('Database Connection Successfull')
}).catch((err)=>{
    console.log('Database Connection Error'+ err)
})