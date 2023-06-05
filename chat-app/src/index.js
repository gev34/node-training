const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const Filter = require('bad-words')

const app = express()   
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))

let count = 0

//server(emit) -> client(recieve) -> Aknowledgement -> -countUpdated
//client(emit) -> server(recieve) -> Aknowledgement -> -increment

io.on('connection',(socket) => {
    //konkret mekin
    socket.emit('message',"Welcome!")
    //saghin baci et mekic
    socket.broadcast.emit('message',"A new user has connected")
    socket.on('sendMessage',(message,callback) => {
        //saghin
        const filter = new Filter()
        if(filter.isProfane(message)){
            return callback('Profanity is not allowed')
        }
        io.emit('message',message)
        callback('Delivered')
    })
    socket.on('sendLocation',(coords,callback)=>{
        io.emit('message',`https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback('')
    })
    socket.on('disconnect',()=>{
        io.emit('message',"A user has disconnected")
    })
})

server.listen(port,()=>{
    console.log(`Server is up on ${port}!`)
})