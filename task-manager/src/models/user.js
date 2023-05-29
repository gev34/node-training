const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User',{
    /* inqy avtomat vercnuma 'User' gracy sarquma poqratar u hognaki avelacnuma collectionsneri mej*/
     name:{
         type:String,
         required:true,
         //trimy hanuma skzbi u verji spacery
         trim:true
     },
     email:{
         type:String,
         required:true,
         trim:true,
         validate(value){
             if(!validator.isEmail(value)){
                 throw new Error ("Email is invalid")
             }
         }   
     },
     password:{
         type:String,
         required:true,
         trim:true,
         minlength:7,
         validate(value){
             if(value.toLowerCase().includes("password")){
                 throw new Error ("Password can not contain 'password'")
             }
         }
     },
     age:{
         type:Number,
         //ete chgrenq age inqy avtomat esi kvercni
         default:0,
         validate(value) {
             if(value < 0) {
                 throw new Error("Age must be a positive number")
             }
         }
     }
 })

 module.exports = User
 