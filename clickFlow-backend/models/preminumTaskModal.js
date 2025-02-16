const mongoose = require('mongoose');

const premiumTaskSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commission: { type: Number, required: true },
  taskAmount: { type: Number, required: true },
  status: { type: String, enum: ['completed', 'not completed'], default: 'not completed' }, // Added status field
}, { timestamps: true });

module.exports = mongoose.model('PremiumTask', premiumTaskSchema);
