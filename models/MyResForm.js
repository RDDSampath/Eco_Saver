const mongoose = require('mongoose');

const MyResFormSchema = new mongoose.Schema({
    
    // resId:{
    //     type:String,
    //     required:true
    // },
    title:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    file:{
        type:Array,
        
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

module.exports = mongoose.model('MyResForms',MyResFormSchema);