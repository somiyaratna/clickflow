const mongoose = require('mongoose');

const whatsappNumberSchema = mongoose.Schema({
  whatsappNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('WhatsappNumber', whatsappNumberSchema);
