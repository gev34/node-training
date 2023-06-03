const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')

router.post('/tasks',auth,async(req,res) => {
    // const task = await new Task(req.body)
    const task = await new Task({...req.body,owner:req.user._id})
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(500).send()
    }
})
//GET tasks?completed=true
//GET tasks?limit=1&skip=2
//limity dnum  enq te qani hat object ugharkenq , isk skipy te vorerordic sksenq(PAGINATION)
//GET tasks?sortBy=createdAt:desc
//dasavorum enq yst inch vor key i u achman kargovi hamar 1 eng grum hakaraky -1
router.get('/tasks',auth,async(req,res) => {
    const match = {}
    const sort = {}
    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }
    if(req.query.sortBy){
        parts = req.query.sortBy.split(':')//'createdAt:desc'y bajanuma 2 masi
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try{
        await req.user.populate({
            path:'tasks',
            match,
            options:{
                limit:parseInt(req.query.limit),
                skip:parseInt(req.query.skip),
                sort
            },
        }).execPopulate();
        res.send(req.user.tasks)
    }catch(e){
        res.status(500).send()
    }
})
module.exports = router