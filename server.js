const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inorganicRoutes = require('./routes/Inorganics');
const priceListRoutes = require('./routes/PriceLists');
const organicRoutes = require('./routes/Organics');
const productRoutes = require('./routes/Products');
const myResFormRoutes = require('./routes/MyResForms');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('./models/Users');
const JWT_SECRET = "abcd"


//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(inorganicRoutes);
app.use(priceListRoutes);
app.use(organicRoutes);
app.use(productRoutes);
app.use(myResFormRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://rddsdhanu:alba123@ecosaver.lk73zkm.mongodb.net/EcoSaver?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});

const User = mongoose.model("Users");

//========= user Register =================//

app.post("/user/register", async (req, res) => {
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

app.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
  try{
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: "30m",
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
  
   app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) { }
});
  
  //========= get All users =================//
  
   app.get("/user/getAllUser", async (req, res) => {
    try {
      const allUser = await User.find({});
      res.send({ status: "ok", data: allUser });
    } catch (error) {
      console.log(error);
    }
  });
  
  //========= delete user =================//
  
  app.post("/user/deleteUser", async (req, res) => {
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
  
  app.get("/user/paginatedUsers", async (req, res) => {
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