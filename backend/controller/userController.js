const e = require('express');
const User = require('../models/User');

exports.addBank = async(req, res) => {
    try{
    const { accountNumber, ifsc , balance } = req.body;
    const user = req.user;
    user.bank = { accountNumber, ifsc , balance };
    await user.save();
    res.status(200).json({ message: 'Bank details added successfully', user });
}
catch(err){
res.status(500).json({ message: 'Server error' });
}
    }

    exports.getBank = async(req, res) => {
        try{
        const user = req.user;
        res.status(200).json({ bankbalance: user.bank?.balance || 0 });
    }
    catch(err){
    res.status(500).json({ message: 'Server error' });
    }
        };

        exports.findByPhone = async(req, res) => {
            try{
            const { phone } = req.params;
            const user = await User.findOne({ phone }).select('-password');
            if(!user){
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        }
        catch(err){
        res.status(500).json({ message: 'Server error' });
        }
            };