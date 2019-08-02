const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const recordsSchema = mongoose.Schema({
    name:{type: String, required: true, maxlength: 30},
    ContactNumber: {type: Number, required: true, maxlength: 20},
    address: {type: String, required: true, maxlength: 30},
 },{
     timestamps: true
 });

 recordsSchema.plugin(mongoosePaginate);
 module.exports = mongoose.model('Record', recordsSchema);