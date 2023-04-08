const mongoose = require('mongoose');

const cusResFormSchema = new mongoose.Schema({
    
    cusId:{
        type:String,
        required:true
    },
    UserName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('cusResForms',cusResFormSchema);