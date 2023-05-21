const express = require('express');
const myResForm = require('../models/MyResForm');

const router = express.Router();

//Add myResForm
router.post('/myResForm/add', (req,res) =>{

    let newProduct = new myResForm(req.body);

    newProduct.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"myResForm saved successfully"
        });
    });
});

//get myResForm
router.get('/myResForm/getall', (req,res) =>{
    myResForm.find().exec((err,MyresForm) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingrMyresForm:MyresForm
        });
    });
});


//update myResForm
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