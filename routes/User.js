const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcd"

//========= user Register =================//

router.post("/user/register", async (req, res) => {
    const { userName, phoneNumber, email, address, password, userType } = req.body;
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
        userType,
      });
      res.send({ status: "ok" });
    } catch (error) {
      console.log(error);
      res.send({ status: "error", error: "Failed to create user" });
    }
  });

//========= user Login =================//

router.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
try{
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "15m",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "InvAlid Password" });
}catch(error){
  console.log(error);
}
});

//========= user Data =================//

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
            console.log(error);
        });
    } catch (error) {
      console.log(error);
        
    }
 });

//========= get All users =================//

 router.get("/user/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

//========= delete user =================//

router.post("/user/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    User.deleteOne({ _id: userid }, function (err, res) {
      console.log(err);
    });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
  }
});

//========= update user =================//

router.get("/user/paginatedUsers", async (req, res) => {
  const allUser = await User.find({});
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)

  const startIndex = (page - 1) * limit
  const lastIndex = (page) * limit

  const results = {}
  results.totalUser=allUser.length;
  results.pageCount=Math.ceil(allUser.length/limit);

  if (lastIndex < allUser.length) {
    results.next = {
      page: page + 1,
    }
  }
  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
    }
  }
  results.result = allUser.slice(startIndex, lastIndex);
  res.json(results)
});

module.exports = router;