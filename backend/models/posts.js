const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);