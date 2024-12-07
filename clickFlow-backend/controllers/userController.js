const bcrypt = require("bcrypt");
const User = require("../models/userModals");
const jwt = require("jsonwebtoken");

async function userSignup(req, res) {
  console.log(req.body);
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

    const newUser = new User({
      fullName,
      username,
      email,
      phoneNo,
      withdrawalPassword: hashedWithdrawalPassword,
      loginPassword: hashedLoginPassword,
      inviteCode,
      termConditionAccepted,
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
    console.log(req.body);

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

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || "your_jwt_secret",
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { userSignup, userLogin };
