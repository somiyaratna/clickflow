const express = require("express");
const preminumTaskController = require("../controllers/premimumTaskController");
const router = express.Router();

router.post("/createPremiumTask", preminumTaskController.createPremiumTask);
router.post("/editPremiumTask/:taskId", preminumTaskController.editPremiumTask);
router.delete("/deletePremiumTask/:taskId", preminumTaskController.deletePremiumTask);
router.get("/fetchAllPremiumTasks", preminumTaskController.fetchAllPremiumTasks);



module.exports = router;