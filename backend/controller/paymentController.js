const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.sendMoney = async (req, res) => {
    try {
        const { phone, amount, note } = req.body;
        const sender = req.user;
        console.log("Sender:", sender);
        const amt =Number(amount);
        if(!amt || amt <=0){
            return res.status(400).json({ message: 'Invalid amount' });
        }
        if((sender.bank?.balance || 0) < amt){
            return res.status(400).json({ message: 'Insufficient balance' });
        }
        const receiver = await User.findOne({ phone });
        if (!receiver) {
            return res.status(404).json({ message: 'Receiver not found' });
        }
        sender.bank.balance -= amt;
        receiver.bank.balance += amt;
        await sender.save();
        await receiver.save();
        const transaction = new Transaction({
            sender: sender._id,
            receiver: receiver._id,
            phone,
            amount: amt,
            note,
            status: 'success',
        });
        await transaction.save();
        res.status(200).json({ message: 'Money sent successfully', txId: transaction._id,balance: sender.bank.balance });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.history = async (req, res) => {
    try{
        const userId =req.user._id;
        const txs = await Transaction.find({ $or: [ { sender: userId }, { receiver: userId } ] })
        .populate('sender', 'name phone')
        .populate('receiver', 'name phone')
        .sort({ createdAt: -1 });
        res.status(200).json(txs);
    }
    catch(err){
        res.status(500).json({ message: 'Server error' });
    }
};