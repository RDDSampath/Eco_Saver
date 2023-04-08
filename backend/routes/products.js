const express = require('express');
const Products = require('../models/product');

const router = express.Router();

//Add Products
router.post('/products/add', (req,res) =>{

    let newPost = new Products(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Products saved successfully"
        });
    });
});

//get Products
router.get('/products/getall', (req,res) =>{
    Products.find().exec((err,Products) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProducts:Products
        });
    });
});


//update Products
router.put('/products/update/:id',(req,res)=>{
    Products.findByIdAndUpdate(
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

router.delete('/products/delete/:id',(req,res) =>{
    Products.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;