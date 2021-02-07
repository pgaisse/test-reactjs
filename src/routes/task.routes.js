const express = require('express');
const router= express.Router();
const Task= require('../models/task');


router.get('/', async (req, res)=>{
    console.log(req.body)
    const task = await Task.find();
    console.log(task);
    res.json(task);
});

router.get('/:id', async (req, res)=>{
    console.log(req.body)
    const task = await Task.findById(req.params.id);
    console.log(task);
    res.json(task);
});

router.put('/:id', async (req, res)=>{
    const {title, description} = req.body;
    const newTask= {title, description}
    await Task.findByIdAndUpdate(req.params.id,newTask);
    console.log(newTask);
    res.json(newTask);
    res.json({status: 'Task updated'});
});

router.delete('/:id', async (req, res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'Task deleted'});
});

router.post('/', async (req,res)=>{
    
    const {title, description}=req.body;
    const task=new Task({title,description});
    await task.save();
    console.log(task)
    res.json({status: 'Task Saved'});
});




module.exports=router;