import express from 'express';
import mongoose from 'mongoose';
import words from '../model/words.js';

const router = express.Router()

router.get('/words',async(req,res)=>{
    try {
        const data = await words.find()

        res.status(202).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.get('/words/:_id',async(req,res)=>{
    const {_id} = req.params
    try {
        const data = await words.findById(_id)

        res.status(202).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.post('/words',async(req,res)=>{
    const newWord = new words(req.body)
    try {
        await newWord.save()

        res.status(200).json(newWord)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.patch('/words/id/:_id',async(req,res)=>{
    const newWord = req.body
    const {_id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) res.status(404).send(`No word with is: ${_id}`)

        const data = await words.findByIdAndUpdate(_id,newWord,{new:true})

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.delete('/words/id/:id',async(req,res) =>{
    const {id:_id} = req.params
    try {
        await words.findByIdAndDelete(_id)

        res.status(200).send("successfully deleted")
    } catch (error) {
        res.status(404).json(error)
    }
})

export default router