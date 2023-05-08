const express = require('express');
const products = require('../models/Product');

const router = express.Router();

//Add products
router.post('/products/add', (req,res) =>{

    let newProduct = new products(req.body);

    newProduct.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"products saved successfully"
        });
    });
});

//get products
router.get('/products/getall', (req,res) =>{
    products.find().exec((err,products) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingrproducts:products
        });
    });
});


//update products
router.put('/products/update/:id',(req,res)=>{
    products.findByIdAndUpdate(
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
    products.findByIdAndRemove(req.params.id).exec((err,deleteProduct) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deleteProduct
        });
    });
});






module.exports = router;