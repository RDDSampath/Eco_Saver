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
<<<<<<< HEAD
router.put('/myResForm/update/:id',(req,res)=>{
    myResForm.findByIdAndUpdate(
=======
router.put('/products/update/:id',(req,res)=>{
    products.findByIdAndUpdate(
>>>>>>> 4eb98c1ad93a4ec9dc915539ac9c625c8683ef05
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

<<<<<<< HEAD
router.delete('/myResForm/delete/:id',(req,res) =>{
    myResForm.findByIdAndRemove(req.params.id).exec((err,deletemyResForm) =>{
=======
router.delete('/products/delete/:id',(req,res) =>{
    products.findByIdAndRemove(req.params.id).exec((err,deleteProduct) =>{
>>>>>>> 4eb98c1ad93a4ec9dc915539ac9c625c8683ef05

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
<<<<<<< HEAD
            message:"Delete Successfull",deletemyResForm
=======
            message:"Delete Successfull",deleteProduct
>>>>>>> 4eb98c1ad93a4ec9dc915539ac9c625c8683ef05
        });
    });
});


module.exports = router;