const premiumTask = require("../models/preminumTaskModal");
const User = require("../models/userModals");

async function createPremiumTask(req, res) {
  const { userId, commission, taskAmount, task_no } = req.body;

  try {
    if (!userId || commission === undefined || taskAmount === undefined) {
      return res.status(400).json({ message: "User ID, commission, and task amount are required." });
    }
    
    const userTask = await User.findOne({ _id: userId });

    const newTask = new premiumTask({
      userId,
      commission,
      taskAmount,
      task_no,
    });

    await newTask.save();
    // userTask.current_task = "Premium Task";
    await userTask.save();
    res.status(201).json({ message: "Premium task created successfully", task: newTask });
  } catch (error) {
    console.error("Error creating premium task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function fetchAllPremiumTasks(req, res) {
  try {
    const tasks = await premiumTask.find().sort({ createdAt: -1 });
    const tasksWithUserDetails = await Promise.all(tasks.map(async (task) => {
      const user = await User.findById(task.userId).select('fullName');
      return { ...task.toObject(), fullName: user ? user.fullName : null };
    }));
    res.status(200).json(tasksWithUserDetails);
  } catch (error) {
    console.error("Error fetching premium tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function editPremiumTask(req, res) {
  const { taskId } = req.params;
  const { commission, taskAmount, status, task_no } = req.body;

  try {
    const task = await premiumTask.findById(taskId);
    if (!task) {
      return res.status(404).json({ message: "Premium task not found." });
    }
    if (task.status === "completed") {
      return res.status(200).json({ message: "Cannot edit a completed task." });
    }
    if (commission === undefined || taskAmount === undefined) {
      return res.status(400).json({ message: "Commission and task amount are required." });
    }
    if (status === undefined) {
      return res.status(400).json({ message: "Status is required." });
    }
    if (task_no === undefined) {
      return res.status(400).json({ message: "Task number is required." });
    }

    const user = await User.findById(task.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (status === "completed") {
      user.wallet_balance = Math.round((parseFloat(user.wallet_balance - taskAmount + commission)) * 1000) / 1000;
      user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning - taskAmount + commission)) * 1000) / 1000;
    }
    await user.save();
    const updatedTask = await premiumTask.findByIdAndUpdate(
      {_id:taskId},
      { commission, taskAmount, status, task_no },
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Premium task not found." });
    }
    
    res.status(200).json({ message: "Premium task updated successfully", task: updatedTask });
  } catch (error) {
    console.error("Error updating premium task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function deletePremiumTask(req, res) {
  const { taskId } = req.params;

  try {
    const deletedTask = await premiumTask.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: "Premium task not found." });
    }

    res.status(200).json({ message: "Premium task deleted successfully." });
  } catch (error) {
    console.error("Error deleting premium task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = { createPremiumTask, fetchAllPremiumTasks, editPremiumTask, deletePremiumTask };
