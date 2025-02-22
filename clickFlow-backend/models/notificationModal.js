const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    request_id: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
