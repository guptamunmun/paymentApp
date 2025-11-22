const mongoose = require('mongoose');
const bankSchema = new mongoose.Schema({
    accountNumber: String,
    ifsc: String,
    balance: { type: Number, default: 0 },
});
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role:{
        type: String,
    defualt:'user'},
    bank: bankSchema,
    createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', userSchema);