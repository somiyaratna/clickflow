const mongoose = require("mongoose");

const dailyTaskSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: String,
        required: true
    },
    task_count: {
        type: Number,
        default: 0
    },
    lavel: {
        type: Number,
        default: 1
    },
    total_task: {
        type: Number,
        default: 45
    },
    today_commission: {
        type: Number,
        default:0
    }

});

const DailyTask = mongoose.model("DailyTask", dailyTaskSchema);

module.exports = DailyTask;
