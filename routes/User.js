const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcd"

//========= user Register =================//
// router.post("/user/register", async (req, res)=>{
//     const {userName,phoneNumber,email,address,password } = req.body;
//     const encryptedPassword = await bcrypt.hash(password, 10);

//     try {
//         const oldUser = await User.findOne({email});
//         if(oldUser){
//             return res.send({error:"User Exists"});
//         }
//         await User.create({
//             userName,
//             phoneNumber,
//             email,
//             address,
//             password : encryptedPassword,
//         })
//         res.send({status:"ok"})
        
//     } catch (error) {
//         res.send({status:"error"})
//     }
// });

router.post("/user/register", async (req, res) => {
    const { userName, phoneNumber, email, address, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
  
    try {
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.send({ error: "User Exists" });
      }
      await User.create({
        userName,
        phoneNumber,
        email,
        address,
        password: encryptedPassword,
      });
      res.send({ status: "ok" });
    } catch (error) {
      console.error(error);
      res.send({ status: "error", error: "Failed to create user" });
    }
  });

//========= user Login =================//

// router.post("/user/login", async (req, res) => {
//     const {email,password} = req.body;

//     const user = await User.findOne({ email });
//     if(!user){
//         return res.json({error:"User Not found"});
//     }
//     if (await bcrypt.compare(password, user.password)){
//         const token = jwt.sign({}, JWT_SECRET);

//         if(res.status(201)){
//             return res.json({status:"ok", data:token});
//         }else{
//             return res.json({error:"error"});
//         }
//     }
//     res.json({ status:"error", error: "Invalid Password"});

// });

router.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: "error", error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({email: user.email}, JWT_SECRET);
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error", error: "Invalid Password" });
    }
  });

 router.post("/user/data", async (req, res)=>{
    const {token} = req.body;
    try {
        const user = jwt.verify(token,JWT_SECRET);
        const useremail = user.email;
        user.findOne({email:useremail})
        .then((data) => {
            res.send({status:"ok", data: data});
        }).catch((error) => {
            res.send({status:"error", data: error});
        });
    } catch (error) {
        
    }
 })




module.exports = router;