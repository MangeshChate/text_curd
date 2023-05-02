const mongoose = require("mongoose");

const DB = "mongodb+srv://mangesh:QYTLPQdNOFoTwxuz@cluster0.6hhshhc.mongodb.net/curdo?retryWrites=true&w=majority"
mongoose.connect(DB).then(()=>{
    console.log("mongo connection successfully !");
}).catch((e)=>{
    console.log("Error in Conecction !"+e);
})

