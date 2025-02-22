const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo : {type : String, required: true, unique: true},
  withdrawalPassword: { type: String, required: true },
  loginPassword: { type: String, required: true },
  inviteCode: { type: String, required: false },
  termConditionAccepted: { type: Boolean, required: true },
  wallet_balance: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  current_task: { type: String, required: false },
  lifetime_earning: { type: Number, default: 0 },
  referralId: { type: String, required: false },
  otp: { type: String, required: false },
  deposit: {type: Number, default: 0},
  token: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);