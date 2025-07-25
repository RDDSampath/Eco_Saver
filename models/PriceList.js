const mongoose = require('mongoose');

const priceListSchema = new mongoose.Schema({

    PLGlassBottle:{
        type:String,
        required:true
    },
    PLGlassPlate:{
        type:String,
        required:true
    },
    PLGlassOther:{
        type:String,
        required:true
    },
    PLIronPlate:{
        type:String,
        required:true
    },
    PLIronPipe:{
        type:String,
        required:true
    },
    PLIronOther:{
        type:String,
        required:true
    },
    PLPlasticBottle:{
        type:String,
        required:true
    },
    PLPlasticPlate:{
        type:String,
        required:true
    },
    PLPlasticOther:{
        type:String,
        required:true
    },
    PLPlasticOther:{
        type:String,
        required:true
    },
    PLBatteries:{
        type:String,
        required:true
    },
    PLBulbs:{
        type:String,
        required:true
    },
    PLElectricalWaste:{
        type:String,
        required:true
    }  
});

module.exports = mongoose.model('priceLists',priceListSchema);