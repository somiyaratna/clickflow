const express = require("express");
const dailyTaskController = require("../controllers/dailyTaskController");
const router = express.Router();

router.post("/taskSubmission", dailyTaskController.dailyTask);
router.get("/fetchDailyTaskData/:userId", dailyTaskController.fetchDailyTask);

module.exports = router;