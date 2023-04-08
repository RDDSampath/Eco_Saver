const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productId:{
        type:String,
        required:true
    },
    productTitle:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    productQuantity:{
        type:String,
        required:true
    },
    productLocation:{
        type:String,
        required:true
    },

});

module.exports = mongoose.model('Products',productSchema);