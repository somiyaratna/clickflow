const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    product_title: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_description: { type: String, required: true },
    product_image: { type: String, required: true },
    product_category: { type: String, required: true },
    task_status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    commission: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
