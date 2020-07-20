const mongoose=require('mongoose');
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