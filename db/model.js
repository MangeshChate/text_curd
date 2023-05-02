const mongoose = require('mongoose');

const curdSchema = new mongoose.Schema({
    name:{
        type:String 
        ,default:""
    },
    email:{
        type:String 
        ,default:""
    }
   
});

const Curd = new mongoose.model('Curd',curdSchema);

module.exports= Curd;