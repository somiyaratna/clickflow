const express = require("express");
// const { getUsers } = require('../controllers/userController');
const userController = require("../controllers/userController");
const router = express.Router();

// router.get('/', getUsers);

router.post("/signup", userController.userSignup);
router.post("/login", userController.userLogin);
router.get("/fetchAllUsers", userController.fetchAllUsers);
router.post("/edit/:userId", userController.editUserDetails);
router.post("/sendOtp", userController.sendOtp);
router.post("/verifyOtp", userController.verifyOtp)
router.delete("/delete/:userId", userController.deleteUser);


module.exports = router;
