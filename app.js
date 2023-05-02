const express = require('express')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
require('./db/conn');

const Curd  = require('./db/model');

app.get("/", (req, res) => {
    Curd.find({})
      .then(data => {
        res.render("curd", { data: data });
      })
      .catch(err => {
        console.log(err);
      });
  });

  
app.post("/add" , (req,res)=>{
    const name  = req.body.name ;
    const email = req.body.email;
    
    const curd = new Curd({
        name : name,
        email :email
    })
    curd.save();
    res.redirect("/")

})














app.listen(2000 , ()=>{
    console.log("Server connected successfully on port 2000");
})