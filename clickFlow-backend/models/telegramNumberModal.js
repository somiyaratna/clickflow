const mongoose = require('mongoose');

const telegramNumberSchema = mongoose.Schema({
  telegramNumber: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongoose.model('TelegramNumber', telegramNumberSchema);