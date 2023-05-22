const express = require('express');
const Inorganics = require('../models/Inorganic');

const router = express.Router();

//Add Inorganics
router.post('/inorganic/add', (req,res) =>{
    let newInorganic = new Inorganics(req.body);

    newInorganic.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inorganics saved successfully"
        });
    });
});



//get Inorganics
router.get('/inorganic/getall', (req,res) =>{
    Inorganics.find().exec((err,Inorganics) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInorganics:Inorganics
        });
    });
});


//update Inorganics
router.put('/inorganic/update/:id',(req,res)=>{
    Inorganics.findByIdAndUpdate(
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

router.delete('/inorganic/delete/:id',(req,res) =>{
    Inorganics.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;