const express = require('express');
const priceLists = require('../models/PriceList');

const router = express.Router();

//Add priceLists
router.post('/priceList/add', (req,res) =>{

    let newPost = new priceLists(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"priceLists saved successfully"
        });
    });
});

//get priceLists
router.get('/priceList/getall', (req,res) =>{
    priceLists.find().exec((err,priceLists) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingpriceLists:priceLists
        });
    });
});


//update priceLists
router.put('/priceList/update/:id',(req,res)=>{
    priceLists.findByIdAndUpdate(
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

router.delete('/priceList/delete/:id',(req,res) =>{
    priceLists.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;