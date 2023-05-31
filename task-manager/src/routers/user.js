const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/users' , async(req,res) => {
    try{
        const users = await(User.find({}))
        res.send(users)
    }catch(e){
        res.status(500).send()
    }
})
router.get('/users/:id',async(req,res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})
router.post('/users',async(req,res) => {
    try{
        const user = await new User(req.body)
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})
router.patch('/users/:id',async(req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name","password","email","age"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation) {
        //stugum enq vor valid keya uzum tarmacni
        return res.status(400).send({error:'Invalid Updates'})
    }
    try{
        //runValidatorsy stuguma normal banov enq uzum eghacogh anenq te che
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
           return res.status(400).send()
        }
        res.send(user)
    }catch(e){
        res.status(404).send()
    }
})
router.delete('/users/:id',async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
           return res.status(400).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()
    }
})
module.exports = router