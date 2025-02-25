const Admin = require("../models/adminModal");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken")


async function sendOtp(req, res) {
    const { username, password } = req.body;
    const otp = crypto.randomInt(100000, 999999).toString();

    try {
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
            to: "mohdshavez0777@gmail.com",
            subject: 'Password Reset OTP',
            text: `Your OTP for password verification is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        const hashedPassword = await bcrypt.hash(password, 10);
        let admin = await Admin.findOne({ username });

        if (admin) {
            admin.password = hashedPassword;
            admin.otp = otp;
        } else {
            admin = new Admin({ username, password: hashedPassword, otp, isVerified: false });
        }

        await admin.save();
        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function verifyOtp(req, res) {
    const { username, otp } = req.body;

    const admin = await Admin.findOne({ username, isVerified: false });
    if (!admin || admin.otp !== otp) {
        return res.status(400).json({ message: "Invalid OTP or already verified" });
    }
    
    admin.isVerified = true;

    try {
        await admin.save();
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        console.error("Error registering admin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const admin = await Admin.findOne({ username, isVerified: true });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found or not verified" });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign(
            { userId: admin._id, username: admin.username },
            process.env.JWT_SECRET || "your_jwt_secret",
            { expiresIn: "12h" }
        );
        let user = admin;
        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.error("Error during admin login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}


module.exports = { sendOtp, verifyOtp, login };
