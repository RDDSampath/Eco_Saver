const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Import routes
const postRoutes = require('./routes/Posts');
const productsRoutes = require('./routes/products');

//App middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(productsRoutes);

const PORT = 8000;
const DB_URL ='mongodb+srv://dhanushka123:RH7ZK1rhI6pnvaj6@ecoserver.ugxc2r4.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});