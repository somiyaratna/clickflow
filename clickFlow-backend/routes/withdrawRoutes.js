const express = require("express");
const withdrawController = require("../controllers/withdrawController");
const router = express.Router();

router.post("/createWithdrawal", withdrawController.createWithdrawRequest);
router.get("/fetchAllWithdrawRequests", withdrawController.fetchAllWithdrawRequests);
router.post("/changeWithdrawRequestStatus/:id", withdrawController.changeWithdrawRequestStatus);
router.get("/fetchPendingNotifications", withdrawController.fetchPendingNotifications);



module.exports = router;