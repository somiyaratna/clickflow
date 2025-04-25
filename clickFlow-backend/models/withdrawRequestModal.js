const mongoose = require('mongoose');

const withdrawRequestSchema = mongoose.Schema({
    wallet_address: { type: String, required: true },
    network: { type: String, required: true },
    currency: { type: String, required: true },
    amount: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['accepted', 'rejected', 'pending'], required: true },
    fullName: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('WithdrawRequest', withdrawRequestSchema);
