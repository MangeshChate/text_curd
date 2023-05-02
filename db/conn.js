const mongoose = require("mongoose");
require('dotenv').config({ path: './config.env' });



const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("mongo connection successfully !");
}).catch((e)=>{
    console.log("Error in Conecction !"+e);
})

