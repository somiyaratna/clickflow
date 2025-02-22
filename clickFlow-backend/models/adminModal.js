const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String, required: false },
  isVerified: {type: Boolean, default:false}
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
