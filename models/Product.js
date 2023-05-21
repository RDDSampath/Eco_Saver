const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    product_title:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    item_location:{
        type:String,
        required:true
    },
    product_quantity:{
        type:String,
        required:true
    },
    raw_materials:{
        type:String,
        required:true
    },
    product_availability:{
        type:String,
        required:true
    },
    product_variant:{
        type:String,
        required:true
    },
    thumbnail_imageUrl:{
        type:String,
        required:true
    },
    other_imageUrls:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Products',productSchema);