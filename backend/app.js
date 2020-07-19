const express=require('express');
const mongoose=require('mongoose');
var config = require("./src/config/config");
const userdata=require('./src/model/user');
const cors=require('cors');
const bodyparser=require('body-parser');
var app=new express();
app.use(cors());
app.use(bodyparser.json());


const productRoutes = require("./src/routes/product");

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB Connected"));


app.use("/api/products",productRoutes);


app.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE.OPTIONS');
    console.log(req.body);
    
    var user={
        name:req.body.user.name,
        email:req.body.user.email,
        phone:req.body.user.phone,
        password:req.body.user.password,
        conpassword:req.body.user.conpassword
    
      }
      var user= new userdata(user);
      user.save();
    })



app.listen(3000,function(){
console.log("listening");
});