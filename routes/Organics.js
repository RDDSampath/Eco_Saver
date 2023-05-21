const express = require('express');
const Organics = require('../models/Organic');

const router = express.Router();

//Add Organics
router.post('/organic/add', (req,res) =>{
    let newOrganic = new Organics(req.body);

    newOrganic.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Organics saved successfully"
        });
    });
});



//get Organics
router.get('/organic/getall', (req,res) =>{
    Organics.find().exec((err,Organics) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOrganics:Organics
        });
    });
});

//get specific Inquiry
router.get('/organic/:id', (req, res) => {
    const organicId = req.params.id;
    Organics.findById(organicId, (err, organic) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        organic
      });
    });
  });


//update Organics
router.put('/organic/update/:id',(req,res)=>{
    Organics.findByIdAndUpdate(
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
    Organics.findByIdAndRemove(req.params.id).exec((err,deletePost) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessfull",err
        });

        return res.json({
            message:"Delete Successfull",deletePost
        });
    });
});






module.exports = router;