const mongoose = require('mongoose');

const inorganicSchema = new mongoose.Schema({

    collectionId:{
        type:String,
        required:true
    },
    GlassBottle:{
        type:String,
        required:true
    },
    GlassPlate:{
        type:String,
        required:true
    },
    GlassOther:{
        type:String,
        required:true
    },
    IronPlate:{
        type:String,
        required:true
    },
    IronPipe:{
        type:String,
        required:true
    },
    IronOther:{
        type:String,
        required:true
    },
    PlasticBottle:{
        type:String,
        required:true
    },
    PlasticPlate:{
        type:String,
        required:true
    },
    PlasticOther:{
        type:String,
        required:true
    },
    PlasticOther:{
        type:String,
        required:true
    },
    HouseNo:{
        type:String,
        required:true
    },
    Street:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    PhoneNo:{
        type:String,
        required:true
    },
    ProfileId:{
        type:String,
        require:true
    }
    
});

module.exports = mongoose.model('Inorganics',inorganicSchema);