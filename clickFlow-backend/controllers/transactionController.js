const Transaction = require("../models/transactionModal");

async function fetchAllTransactions(req, res) {
  const { userId } = req.params;

  try {
    const transaction = await Transaction.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { fetchAllTransactions };