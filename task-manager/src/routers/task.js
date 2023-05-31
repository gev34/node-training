const express = require('express')
const router = new express.Router()
const Task = require('../models/task')


router.post('/tasks',async(req,res) => {
    try{
        const task = await new Task(req.body)
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
})
module.exports = router