const express = require('express');
const router = express.Router();
const tests = require('../models/Tests');


//save packages

router.post('/tests/add',(req,res)=>{

    let newTest = new tests(req.body);

    newTest.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Test save Successfully"
        });
    });
});

//get data
router.get('/tests',(req,res)=>{
    tests.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    })
})

//delete
router.delete('/tests/delete/:id',(req,res) =>{
    drivers.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
            if(err)
                return res.status(400).json({
                    massage:"delete unsuccesful",err
                });
            return res.json({
                message:"Delete Succesfull",deletedPost
            });
        });
    });

    //get specific 
 router.get("/tests:id",(req,res) =>{
    let userId = req.params.id;
    tests.findById(userId,(err,posts) =>{
        if(err){
            return res.status(400).json({
                success:false,err
            });
        }
        return res.status(200).json({
            success:true,
            posts
        });
    });
});



module.exports=router;