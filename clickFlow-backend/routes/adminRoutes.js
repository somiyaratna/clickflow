const express = require("express");
const adminController = require("../controllers/adminController");
const router = express.Router();
// const userLoginVerification = require("../middlewares/userLoginVerification")

router.post("/sendOtp",  adminController.sendOtp);
router.post("/verifyOtp", adminController.verifyOtp);
router.post("/login", adminController.login)

module.exports = router;