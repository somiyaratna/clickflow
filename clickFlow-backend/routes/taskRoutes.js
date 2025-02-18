const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/alltask/:userId", taskController.fetchAllTasks);

module.exports = router;