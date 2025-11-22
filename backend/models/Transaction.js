const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: 'User',},
    receiver:{
        type: Schema.Types.ObjectId,
        ref: 'User',},
    amount: Number,
    status:{
        type: String,
        enum: ['success', 'failed'],
    default: 'success',},
    note: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);