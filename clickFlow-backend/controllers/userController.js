const bcrypt = require("bcrypt");
const User = require("../models/userModals");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const Transaction = require('../models/transactionModal');
const DailyTask = require('../models/dailyTaskModal');
const mongoose = require("mongoose");

const depositSuccessMail = (user, amount, date) => ({
  from: process.env.EMAIL_USER,
  to: user.email,
  subject: 'Deposit Successful – ClickFlowPro',
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto;">
      <h2 style="color: #0b5394;">Deposit Confirmation</h2>
      <p>Hello ${user.fullName || 'User'},</p>
      <p>Your deposit of <strong>$${amount}</strong> has been successfully processed and is now available in your ClickFlowPro account.</p>

      <p><strong>Deposit Details:</strong><br/>
      <strong>Amount:</strong> $${amount}<br/>
      <strong>Date:</strong> ${date}</p>

      <p>You're all set to put your funds to work! Head over to your dashboard to start managing your campaigns and making the most of your ClickFlowPro tools.</p>

      <a href="https://clickflowpro.us/contact" style="display: inline-block; margin-top: 16px; padding: 10px 20px; background-color: #0b5394; color: white; text-decoration: none; border-radius: 5px;">Contact Support</a>

      <p style="margin-top: 20px;">Thanks for being part of ClickFlowPro!</p>
      <p>— The ClickFlowPro Team<br/>
    </div>
  `,
});

async function userSignup(req, res) {
  try {
    const {
      fullName,
      username,
      email,
      phoneNo,
      withdrawalPassword,
      loginPassword,
      inviteCode,
      termConditionAccepted,
      wallet_balance,
      level,
      current_task,
      lifetime_earning,
    } = req.body;

    if (
      !fullName ||
      !username ||
      !email ||
      !phoneNo ||
      !withdrawalPassword ||
      !loginPassword ||
      !termConditionAccepted
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNo }, { username }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Username, Email or phone number already exists" });
    }

    const hashedLoginPassword = await bcrypt.hash(loginPassword, 10);
    const hashedWithdrawalPassword = await bcrypt.hash(withdrawalPassword, 10);

    // Generate a random unique 8 character referralId
    const referralId = Math.random().toString(36).substring(2, 10);

    const newUser = new User({
      fullName,
      username,
      email,
      phoneNo,
      withdrawalPassword: hashedWithdrawalPassword,
      loginPassword: hashedLoginPassword,
      inviteCode: inviteCode || "", // Make inviteCode optional
      termConditionAccepted,
      wallet_balance: wallet_balance || 0, // Default to 0 if not provided
      level: level || 1, // Default to 1 if not provided
      current_task: current_task || "", // Default to empty string if not provided
      lifetime_earning: lifetime_earning || 0, // Default to 0 if not provided
      referralId, // Add the generated referralId
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function userLogin(req, res) {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res
        .status(400)
        .json({ message: "Username/Email and password are required" });
    }

    const user = await User.findOne({
      $or: [
        { email: identifier },
        { username: identifier },
        { phoneNo: identifier },
      ],
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.loginPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a token that expires when the tab is closed
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "12h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function fetchAllUsers(req, res) {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function editUserDetails(req, res) {
  const { userId } = req.params;
  const { fullName, username, email, phoneNo, wallet_balance, deposit, level, current_task, lifetime_earning, credit_score } = req.body;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  try {
    
    if (!fullName && !username && !email && !phoneNo && wallet_balance === undefined && level === undefined && current_task === undefined && lifetime_earning === undefined) {
      return res.status(400).json({ message: "At least one field must be provided for update." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    let temp_depo = user.deposit;
    let temp_wallet = user.wallet_balance;
    if(deposit > user.deposit){
      const transaction = new Transaction({
        type: "deposit",
        amount: parseFloat(deposit) - parseFloat(user.deposit),
        userId: userId
      });
      await transaction.save();
      const amount = parseFloat(deposit) - parseFloat(user.deposit);
      try {
        await transporter.sendMail(
          depositSuccessMail(user, amount , today.toLocaleDateString())
        );
      } catch (emailError) {
          console.log("Email sending failed, but proceeding anyway:", emailError.message);
      }
    }


    if (fullName) user.fullName = fullName;
    if (username) user.username = username;
    if (email) user.email = email;
    if (phoneNo) user.phoneNo = phoneNo;
    if (wallet_balance !== undefined) user.wallet_balance = parseFloat(wallet_balance);
    if (level !== undefined) user.level = level;
    if (current_task) user.current_task = current_task;
    if (lifetime_earning !== undefined) user.lifetime_earning = lifetime_earning;
    if(deposit) user.deposit = deposit;
    if(credit_score) user.credit_score = credit_score;

    if( (deposit > temp_depo) && (temp_wallet === user.wallet_balance) ){
      user.wallet_balance = (parseFloat(wallet_balance) + parseFloat(deposit) - parseFloat(temp_depo)).toFixed(2);
    }

    if(deposit >= 50){
      user.level = 1;
    } 
    if(deposit >= 100){
      user.level = 2;
    }
    if(deposit >= 1000){
      user.level = 3;
    }
    if(deposit >= 5000){
      user.level = 4;
    }

    await user.save();

    let dailyTask = await DailyTask.findOne({ userId, date: today });

    if(dailyTask){
      dailyTask.task_count = parseInt(current_task)
      dailyTask.save()
    } else {
      let total_task = 45;
      if (user.level === 1) {
        total_task = 45;
      } else if (user.level === 2) {
        total_task = 50;
      } else if (user.level === 3) {
        total_task = 55;
      } else {
        total_task = 60;
      }
      dailyTask = new DailyTask({
        userId,
        level: user.level,
        date: today,
        task_count: parseInt(current_task),
        total_task,
        today_commission: 0
      });
      await dailyTask.save();
    }

    res.status(200).json({ message: "User details updated successfully", user });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deleteUser(req, res) {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function sendOtp(req, res) {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    user.otp = otp;
    await user.save();

    res.status(200).json({ message: "OTP sent to your email successfully"});
  } catch (error) {
    console.error("Error processing forgot password request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function verifyOtp(req, res) {
  const { email, otp, newPassword } = req.body;

  try {
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const hashedLoginPassword = await bcrypt.hash(newPassword, 10);
    user.loginPassword = hashedLoginPassword;
    user.otp = null;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function verifyWithdrawOtp(req, res) {
  const { email, otp, newPassword } = req.body;

  try {
    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const hashedLoginPassword = await bcrypt.hash(newPassword, 10);
    user.withdrawalPassword = hashedLoginPassword;
    user.otp = null;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


async function fetchSingleUser(req, res) {
  const userId = req.params.userId;

  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid or missing user ID. Please contact customer care.",
    });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please contact customer care.",
    });
  }
}






module.exports = { userSignup, userLogin, fetchAllUsers, editUserDetails, deleteUser, sendOtp, verifyOtp, fetchSingleUser, verifyWithdrawOtp };
