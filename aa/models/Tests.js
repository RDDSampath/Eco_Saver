import { Schema, model } from 'mongoose';

const testSchema = new Schema({

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
export default model('Tests',testSchema);