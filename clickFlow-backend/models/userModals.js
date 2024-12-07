const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNo : {type : String, required: true, unique: true},
  withdrawalPassword: { type: String, required: true },
  loginPassword: { type: String, required: true },
  inviteCode: { type: String, required: false },
  termConditionAccepted: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);