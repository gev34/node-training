const app = require('./app')
// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

const port = process.env.PORT
// const app = express()
//express middlware
// app.use((req,res,next) => {
//     /*minchev nextchkanchenq chi sharunakvi*/
//     res.send("site is currently down. Check back soon!")
// })
//automat jsony sarquma object
// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// const multer = require('multer')
// const upload = multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000//1mb
//     },
//     fileFilter(req,file,cb){
//         if(!file.originalname.endsWith('.pdf')){
//             return cb(new Error('Please upload a pdf file'))
//         }
//         cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res) => {
//     res.send()
// })


app.listen(port,() => {
    console.log("server is up on port" , port)
})
// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async() => {
    // const task =await Task.findById('6479f0491d8d5cfc5433cf2b')
    //gtnuma et taski owneri objecty Task modelin ref taluc heto
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    // const user = await User.findById('6479cd13dd65e5bf12d38cd9')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
// }
// main()