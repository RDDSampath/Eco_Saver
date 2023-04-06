const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    projectId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    reason:{
        type:String,
        required:true
    }
   


});

module.exports = mongoose.model('Posts',postSchema);