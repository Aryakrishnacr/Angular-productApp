const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/productDb');
const Schema=mongoose.Schema;
var NewUser=new Schema({
    name:String,
    email:String,
    phone:Number,
    password:String,
    conpassword:String


});
var userdata=mongoose.model('user',NewUser);
module.exports=userdata;