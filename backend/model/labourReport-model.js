const mongoose = require('mongoose');

const labourReport =mongoose.Schema({
    name:{type:String},
    Skilled:{type:String},
    UnSkilled:{type:String},
    WorkDone:{type:String},
    LabourReport: {type:mongoose.Schema.Types.ObjectId, ref:'UserData'}
});
module.exports = mongoose.model('LabourReport', labourReport);