const Products = require("../models/productModal");
const PremiumTask = require("../models/preminumTaskModal");
const DailyTask = require("../models/dailyTaskModal");
const User = require("../models/userModals");

async function fetchProducts(req, res) {
    try {
        // Fetch all products from the database
        const products = await Products.find({});
        console.log(products.length)
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function fetchSingleProduct(req, res) {
    const {userId, deposit, level } = req.body;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    try {
        const user = await User.findById(userId);
        const products = await Products.find({ price: { $lt: user?.deposit } });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found under the specified price." });
        }

        const randomIndex = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomIndex].toObject();

        let commission = 0;

        let i = 1

        while((selectedProduct.price * (i + 1)) < deposit){
            i++;
        }
        selectedProduct.price = Math.round((parseFloat(selectedProduct.price * i)) * 1000) / 1000;
        selectedProduct.title +=  ` (Pack of ${i})`
        if (user.level === 1) {
            commission = Math.round((parseFloat(selectedProduct.price) * 0.8) / 100 * 1000) / 1000;
        }
        if (user.level === 2) {
            commission = Math.round((parseFloat(selectedProduct.price) * 1) / 100 * 1000) / 1000;
        }
        if (user.level === 3) {
            commission = Math.round((parseFloat(selectedProduct.price) * 1.2) / 100 * 1000) / 1000;
        }
        if (user.level === 4) {
            commission = Math.round((parseFloat(selectedProduct.price) * 1.4) / 100 * 1000) / 1000;
        }
        selectedProduct.commission = commission;
        const premiumTask = await PremiumTask.findOne({ userId, status: "not completed" });
        const dailyTask = await DailyTask.findOne({ userId, date: today });

        if(premiumTask && dailyTask && (dailyTask.task_count + 1) === premiumTask.task_no){
            selectedProduct.price = premiumTask.taskAmount;
            selectedProduct.commission = premiumTask.commission;
        }
        if(premiumTask && !dailyTask && premiumTask.task_no === 1){
            selectedProduct.price = premiumTask.taskAmount;
            selectedProduct.commission = premiumTask.commission;
        }
        
        res.status(200).json(selectedProduct);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { fetchProducts, fetchSingleProduct };
