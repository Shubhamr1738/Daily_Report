const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
site:{type:String},
labourReport:
{
    name:{type:String},
    Skilled: {type:String},
    Unskilled: {type:String},
    WorkDone: {type:String}
}
});

module.exports = mongoose.model('UserData', userDataSchema);