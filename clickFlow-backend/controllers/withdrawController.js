const Withdraw = require("../models/withdrawRequestModal");
const User = require("../models/userModals");
const DailyTask = require("../models/dailyTaskModal")
const Notification = require("../models/notificationModal")
const bcrypt = require("bcrypt");
const TransactionModal = require("../models/transactionModal");

async function createWithdrawRequest(req, res) {
    const { wallet_address, network, amount, userId, fullName, withdrawalPassword } = req.body;

    try {
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(403).json({ message: "Invalid user" });
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        let dailyTask = await DailyTask.findOne({ userId, date: today });
        if(!dailyTask || dailyTask.task_count !== dailyTask.total_task){
            return res.status(401).json({ message: "Before Withdrawal, Please Complete All Tasks." });
        }

        const existingRequest = await Withdraw.findOne({ userId, status: "pending" });
        if (existingRequest) {
            return res.status(400).json({ message: "You already have a pending withdrawal request." });
        }

        const isPasswordValid = await bcrypt.compare(withdrawalPassword, user.withdrawalPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const newWithdrawRequest = new Withdraw({
            wallet_address,
            network,
            amount,
            userId,
            status: "pending",
            fullName
        });

        await newWithdrawRequest.save();

        const notification = new Notification({
            title: "Withdrawal Request",
            description: `${fullName} has requested a withdrawal of $${amount}.`,
            status : "pending",
            request_id: newWithdrawRequest._id,
        });

        await notification.save();
        const transaction = new TransactionModal({
            type: "withdrawal",
            amount,
            withdrawalId: newWithdrawRequest._id,
            status: "pending",
            userId
        });
        await transaction.save();
        user.wallet_balance = Math.round((parseFloat(user.wallet_balance - parseFloat(amount))) * 1000) / 1000;
        await user.save();
        res.status(201).json({ message: "Withdrawal request created successfully", newWithdrawRequest });
    } catch (error) {
        console.error("Error creating withdrawal request:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function fetchAllWithdrawRequests(req, res) {
    try {
        const withdrawRequests = await Withdraw.find().sort({ createdAt: -1 });
        res.status(200).json(withdrawRequests);
    } catch (error) {
        console.error("Error fetching withdrawal requests:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function changeWithdrawRequestStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    if (!['accepted', 'rejected', 'pending'].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
    }

    try {
        const withdrawRequest = await Withdraw.findById(id);
        if (!withdrawRequest) {
            return res.status(404).json({ message: "Withdraw request not found" });
        }

        const notification = await Notification.findOne({request_id : id});

        notification.status = status;
        await notification.save();

        const transaction = await TransactionModal.findOne({withdrawalId : id});

        withdrawRequest.status = status;
        const user = await User.findById(withdrawRequest.userId);
        if(status === "rejected"){
            user.wallet_balance = Math.round((parseFloat(user.wallet_balance + parseFloat(withdrawRequest.amount))) * 1000) / 1000;
        }
        await withdrawRequest.save();
        await user.save();
        transaction.status = status;
        await transaction.save();

        res.status(200).json({ message: "Withdraw request status updated successfully", withdrawRequest });
    } catch (error) {
        console.error("Error updating withdraw request status:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function fetchPendingNotifications(req, res) {
    try {
        const pendingNotifications = await Notification.find({ status: 'pending' }).sort({ createdAt: -1 });
        res.status(200).json(pendingNotifications);
    } catch (error) {
        console.error("Error fetching pending notifications:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



module.exports = { createWithdrawRequest, fetchAllWithdrawRequests, changeWithdrawRequestStatus, fetchPendingNotifications };
