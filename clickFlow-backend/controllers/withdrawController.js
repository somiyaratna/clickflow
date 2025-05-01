const Withdraw = require("../models/withdrawRequestModal");
const User = require("../models/userModals");
const DailyTask = require("../models/dailyTaskModal")
const Notification = require("../models/notificationModal")
const bcrypt = require("bcrypt");
const TransactionModal = require("../models/transactionModal");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const withdrawalProcessingMail = (user, amount, wallet, network, currency) => ({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Withdrawal Request Received',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
        <h2 style="color: #0b5394;">Withdrawal Request Confirmation</h2>
        <p>Hello ${user.fullName || 'User'},</p>
        <p>We’ve received your withdrawal request of <strong>${amount} USDT</strong>.</p>
        <p><strong>Wallet Address:</strong> ${wallet}</p>
        <p><strong>Cryptocurrency:</strong> ${currency}</p>
        <p><strong>Network:</strong> ${network}</p>
        <p>It may take up to <strong>3 to 4 hours</strong> to reflect the funds in your crypto wallet.</p>
        <p>Thank you for your patience.</p>
        <a href="https://clickflowpro.us/contact" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background-color: #0b5394; color: white; text-decoration: none; border-radius: 5px;">Contact Support</a>
        <p style="margin-top: 20px;">— The Support Team</p>
      </div>
    `,
});

const withdrawalRejectedMail = (user, amount, wallet, network, currency, reason) => ({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Withdrawal Request Rejected',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
        <h2 style="color: #b22222;">Withdrawal Request Rejected</h2>
        <p>Hello ${user.fullName || 'User'},</p>
        <p>Your withdrawal request of <strong>${amount} USDT</strong> was <strong>rejected</strong>.</p>
        <p><strong>Wallet Address:</strong> ${wallet}</p>
        <p><strong>Cryptocurrency:</strong> ${currency}</p>
        <p><strong>Network:</strong> ${network}</p>
        <p><strong>Reason:</strong> ${reason || "Transaction flagged for review or incorrect wallet details."}</p>
        <p>Please review and resubmit your withdrawal request.</p>
        <a href="https://clickflowpro.us/contact" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background-color: #b22222; color: white; text-decoration: none; border-radius: 5px;">Contact Support</a>
        <p style="margin-top: 20px;">— The Support Team</p>
      </div>
    `,
});

const withdrawalAcceptedMail = (user, amount, wallet, network, currency) => ({
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Withdrawal Request Accepted',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
        <h2 style="color: #228b22;">Withdrawal Accepted</h2>
        <p>Hello ${user.fullName || 'User'},</p>
        <p>Your withdrawal of <strong>${amount} USDT</strong> has been <strong>approved</strong>.</p>
        <p><strong>Wallet Address:</strong> ${wallet}</p>
        <p><strong>Cryptocurrency:</strong> ${currency}</p>
        <p><strong>Network:</strong> ${network}</p>
        <p>The funds will be transferred to your wallet within <strong>1 to 2 hours</strong>.</p>
        <a href="https://clickflowpro.us/contact" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background-color: #228b22; color: white; text-decoration: none; border-radius: 5px;">Contact Support</a>
        <p style="margin-top: 20px;">— The Support Team</p>
      </div>
    `,
});
  
  
  

async function createWithdrawRequest(req, res) {
    const { wallet_address, network, amount, userId, fullName, withdrawalPassword, currency } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        
        const user = await User.findById(userId).session(session);
        if (!user) {
            throw new Error("Invalid user");
        }

        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        let dailyTask = await DailyTask.findOne({ userId, date: today }).session(session);
        if (!dailyTask || dailyTask.task_count !== dailyTask.total_task) {
            throw new Error("Before Withdrawal, Please Complete All Tasks.");
        }

        const existingRequest = await Withdraw.findOne({ userId, status: "pending" }).session(session);
        if (existingRequest) {
            throw new Error("You already have a pending withdrawal request.");
        }

        const isPasswordValid = await bcrypt.compare(withdrawalPassword, user.withdrawalPassword);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }

        const newWithdrawRequest = new Withdraw({
            wallet_address,
            network,
            amount,
            currency,
            userId,
            status: "pending",
            fullName
        });
        await newWithdrawRequest.save({ session });

        const notification = new Notification({
            title: "Withdrawal Request",
            description: `${fullName} has requested a withdrawal of $${amount}.`,
            status: "pending",
            request_id: newWithdrawRequest._id,
        });
        await notification.save({ session });

        const transaction = new TransactionModal({
            type: "withdrawal",
            amount,
            withdrawalId: newWithdrawRequest._id,
            status: "pending",
            userId
        });
        await transaction.save({ session });

        user.wallet_balance = Math.round((parseFloat(user.wallet_balance - parseFloat(amount))) * 1000) / 1000;
        await user.save({ session });

        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail(
            withdrawalProcessingMail(user, amount, wallet_address, network, currency)
        );

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ message: "Withdrawal request created successfully", newWithdrawRequest });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error("Error creating withdrawal request:", error);
        res.status(500).json({ message: error.message || "Internal server error" });
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
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        withdrawRequest.status = status;
        const user = await User.findById(withdrawRequest.userId);
        if(status === "rejected"){
            user.wallet_balance = Math.round((parseFloat(user.wallet_balance + parseFloat(withdrawRequest.amount))) * 1000) / 1000;
        }
        await withdrawRequest.save();
        await user.save();
        transaction.status = status;
        await transaction.save();
        let currency = withdrawRequest.currency || `Not Available`;
        try {
            if (status === "accepted") {
                await transporter.sendMail(
                    withdrawalAcceptedMail(user, withdrawRequest.amount, withdrawRequest.wallet_address, withdrawRequest.network, currency)
                );
            } else if (status === "rejected") {
                await transporter.sendMail(
                    withdrawalRejectedMail(user, withdrawRequest.amount, withdrawRequest.wallet_address, withdrawRequest.network, currency)
                );
            }
        } catch (emailError) {
            console.warn("Email sending failed, but proceeding anyway:", emailError.message);
        }

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
