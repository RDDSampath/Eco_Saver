const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({

        TName : {
            type:String,
            required :true
        },
        TId : {
            type:String,
            required :true
        },
        TTime : {
            type:String,
            required :true
        },
        TCharges : {
            type:String,
            required :true
        }
});
module.exports = mongoose.model('Tests',testSchema);