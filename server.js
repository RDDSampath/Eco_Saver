const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const inorganicRoutes = require('./routes/Inorganics');
const priceListRoutes = require('./routes/PriceLists');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(inorganicRoutes);
app.use(priceListRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://rddsdhanu:alba123@ecosaver.lk73zkm.mongodb.net/?retryWrites=true&w=majority';

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