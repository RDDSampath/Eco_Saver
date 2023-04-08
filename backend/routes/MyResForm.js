const express = require('express');
const MyResForms = require('../models/MyResForm');

const router = express.Router();

//Add MyResForms
router.post('/myresform/add', (req,res) =>{

    let newPost = new MyResForms(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"MyResForms saved successfully"
        });
    });
});

//get MyResForms
router.get('/myresform/getall', (req,res) =>{
    MyResForms.find().exec((err,MyResForms) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingMyResForms:MyResForms
        });
    });
});


//update MyResForms
router.put('/myresform/update/:id',(req,res)=>{
    MyResForms.findByIdAndUpdate(
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

router.delete('/myresform/delete/:id',(req,res) =>{
    MyResForms.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router