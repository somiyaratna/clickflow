const express = require("express");
const transactionController = require("../controllers/transactionController");
const router = express.Router();

router.get("/alltransaction/:userId", transactionController.fetchAllTransactions);

module.exports = router;