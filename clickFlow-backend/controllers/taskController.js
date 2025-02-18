const Task = require("../models/tasksModal");

async function fetchAllTasks(req, res) {
  const { userId } = req.params;

  try {
    const tasks = await Task.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { fetchAllTasks };