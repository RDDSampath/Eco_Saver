const express = require('express');
const cusResForms = require('../models/cusRegForm');

const router = express.Router();

//Add cusResForms
router.post('http://localhost:8000/myresform/add/cusResForm/add', (req,res) =>{

    let newPost = new cusResForms(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"cusResForms saved successfully"
        });
    });
});

//get cusResForms
router.get('/cusResForm/getall', (req,res) =>{
    cusResForms.find().exec((err,cusResForms) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingcusResForms:cusResForms
        });
    });
});


//update cusResForms
router.put('/cusResForm/update/:id',(req,res)=>{
    cusResForms.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete post

router.delete('/cusResForm/delete/:id',(req,res) =>{
    cusResForms.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});
