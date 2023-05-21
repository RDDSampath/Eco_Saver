const mongoose = require('mongoose'); // import mongoose
const Schema = mongoose.Schema; // create schema

const productSchema = new Schema({ // create schema
    title : {
        type : String,
        required : true
    },

    discription : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    category : {
        type : String,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },

    colors : {
        type : Array,
        optional : true
    },

    sizes : {
        type : Array,
        optional : true
    },

    tumnail_url : {
        type : String,
        required : true
    },

    image_urls : {
        type : Array,
        required : true
    },

});

const product = mongoose.model("products", productSchema); // create model

module.exports = product; // export model