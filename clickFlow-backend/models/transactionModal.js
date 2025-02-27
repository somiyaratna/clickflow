const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    withdrawalId: { type: mongoose.Schema.Types.ObjectId, ref: 'WithdrawRequest', required: false },
    status: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionSchema);