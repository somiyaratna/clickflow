const DailyTask = require("../models/dailyTaskModal");
const User = require("../models/userModals");
const Tasks = require("../models/tasksModal");
const PremiumTask = require("../models/preminumTaskModal")

async function dailyTask(req, res){
    const { userId, commission, product_title, product_price, product_category, product_image, product_description } = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        
        const user = await User.findOne({_id : userId});
        let dailyTask = await DailyTask.findOne({ userId, date: today });
        let task_count = 0;
        if(dailyTask){
            task_count = dailyTask.task_count;
        }
        const premiumTask = await PremiumTask.findOne({ userId: userId, status: 'not completed' });

        if((premiumTask?.task_no !== task_count + 1) && product_price > user.wallet_balance){
            return res.status(200).json({ message: "Wallet Amount is Less Than Task Amount", dailyTask });
        }

        if (dailyTask) {
            if(dailyTask.task_count === dailyTask.total_task){
                return res.status(200).json({ message: "All Tasks are Completed for today", dailyTask });
            }
            if(dailyTask.task_count + 1 === dailyTask.total_task){
                user.wallet_balance = Math.round((parseFloat(user.wallet_balance + dailyTask.today_commission + commission)) * 1000) / 1000;
                user.save();
            }
            dailyTask.task_count += 1;
            dailyTask.today_commission += Math.round((parseFloat(commission)) * 1000) / 1000;;
            await dailyTask.save();
            const task = new Tasks({
                product_title,
                product_price,
                product_description,
                product_image,
                product_category,
                userId,
                task_status: "completed",
                commission
            });
            await task.save();
            if(!premiumTask){
                // user.wallet_balance = Math.round((parseFloat(user.wallet_balance + commission)) * 1000) / 1000;
                user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning + commission)) * 1000) / 1000;
                user.current_task = dailyTask.task_count;
                await user.save();
            }else{
                if(premiumTask.task_no === dailyTask.task_count){
                    user.wallet_balance = Math.round((parseFloat(user.wallet_balance - premiumTask.taskAmount )) * 1000) / 1000;;
                    user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning - premiumTask.taskAmount + premiumTask.commission)) * 1000) / 1000;
                    user.current_task = dailyTask.task_count;
                    await user.save();
                    premiumTask.status = "completed";
                    premiumTask.save();
                }else{
                    // user.wallet_balance = Math.round((parseFloat(user.wallet_balance + commission)) * 1000) / 1000;;
                    user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning + commission)) * 1000) / 1000;
                    user.current_task = dailyTask.task_count;
                    await user.save();
                }
            }
            return res.status(200).json({ message: "Task count updated", dailyTask });
        } else {
            let total_task = 45;
            if(user.level === 1){
                total_task = 45;
            } else if(user.level === 2){
                total_task = 50;
            } else if(user.level === 3){
                total_task = 55;
            } else{
                total_task = 60;
            }
            dailyTask = new DailyTask({
                userId,
                level : user.level,
                date: today,
                task_count: 1,
                total_task,
                today_commission : Math.round((parseFloat(commission)) * 1000) / 1000
            });
            await dailyTask.save();
            const task = new Tasks({
                product_title,
                product_price,
                product_description,
                product_image,
                product_category,
                userId,
                task_status: "completed",
                commission
            });
            await task.save();
            if(!premiumTask){
                // user.wallet_balance = Math.round((parseFloat(user.wallet_balance + commission)) * 1000) / 1000;;
                user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning + commission)) * 1000) / 1000;
                user.current_task = dailyTask.task_count;
                await user.save();
            }else{
                if(premiumTask.task_no === 1){
                    user.wallet_balance = Math.round((parseFloat(user.wallet_balance - premiumTask.taskAmount )) * 1000) / 1000;;
                    user.lifetime_earning = Math.round((parseFloat(user.lifetime_earning - premiumTask.taskAmount + premiumTask.commission)) * 1000) / 1000;
                    user.current_task = dailyTask.task_count;
                    await user.save();
                    premiumTask.status = "completed";
                    premiumTask.save();
                }
            }
            return res.status(201).json({ message: "New daily task created", dailyTask });
        }
    } catch (error) {
        return res.status(500).json({ message: "Error inserting/updating daily task", error });
    }
};

async function fetchDailyTask(req, res) {
    const { userId } = req.params;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        const dailyTask = await DailyTask.findOne({ userId, date: today });

        if (!dailyTask) {
            return res.status(200).json({ message: "No daily task found for today." });
        }

        res.status(200).json({message: "success", dailyTask});
    } catch (error) {
        console.error("Error fetching daily task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function taskReset(req, res) {    
    const {userId} = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    try {
        const user = await User.findById(userId);
        const dailyTask = await DailyTask.findOne({ userId, date: today });
        if(dailyTask){
            user.current_task = 0;
            dailyTask.task_count = 0;
            await dailyTask.save();
            await user.save();
            return res.status(200).json({message: "Task reset successfully", dailyTask});
        } else {
            return res.status(200).json({message: "User has not started the task for today"});
        }
    } catch (error) {
        console.error("Error resetting daily task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
} 


module.exports = {dailyTask, fetchDailyTask, taskReset}
