const express = require("express");
const dailyTaskController = require("../controllers/dailyTaskController");
const router = express.Router();
const userLoginVerification = require("../middlewares/userLoginVerification")

router.post("/taskSubmission", userLoginVerification, dailyTaskController.dailyTask);
router.get("/fetchDailyTaskData/:userId", dailyTaskController.fetchDailyTask);
router.post("/resetTask", dailyTaskController.taskReset);

module.exports = router;