const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    Owner_name:{
        type:String,
        required:true
    },
    Owner_number:{
        type:String,
        required:true
    },
    email_address:{
        type:String,
        required:true
    },
    Place_name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('Posts',postSchema);