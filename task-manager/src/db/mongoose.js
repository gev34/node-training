const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true
})
const db = mongoose.connection
// const User = mongoose.model('User',{
//    /* inqy avtomat vercnuma 'User' gracy sarquma poqratar u hognaki avelacnuma collectionsneri mej*/
//     name:{
//         type:String,
//         required:true,
//         //trimy hanuma skzbi u verji spacery
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error ("Email is invalid")
//             }
//         }   
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:7,
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error ("Password can not contain 'password'")
//             }
//         }
//     },
//     age:{
//         type:Number,
//         //ete chgrenq age inqy avtomat esi kvercni
//         default:0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error("Age must be a positive number")
//             }
//         }
//     }
// })

// const me = new User({
//     name:"Gevs",
//     email:"asas2@mail.ru",
//     password:"Paswdwsword888",
//     age:9
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error!:",error)
// })

// db.collection('users').deleteMany({
//     name:"Gevs"
// },(error, result) => {
//     if (error) {
//       console.log('Error:', error);
//     } else {
//       console.log('Documents deleted:', result.deletedCount);
//     }
//   })
// const Task = mongoose.model("Task", {
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })
// const myTask = new Task({
//     description:"Learn a mongoose",
//     completed:false
// })
// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log(error)
// })