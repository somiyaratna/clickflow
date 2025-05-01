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
    const { userId, deposit, level } = req.body;
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    try {
        const user = await User.findById(userId);
        const products = await Products.find({ price: { $lt: user?.deposit } });

        if (!products || products.length === 0) {
            return res.status(404).json({ message: "No products found under the specified price." });
        }

        const levelSettings = {
            1: { tasks: 45, percent: 0.008 },
            2: { tasks: 50, percent: 0.01 },
            3: { tasks: 55, percent: 0.012 },
            4: { tasks: 60, percent: 0.014 },
        };

        const { tasks, percent } = levelSettings[user.level] || levelSettings[1];

        const maxDailyCommission = Math.round((deposit * 0.11) * 1000) / 1000;
        const maxPerTaskCommission = maxDailyCommission / tasks;

        // Filter only those products which can give valid commission per task
        const validProducts = products.filter(p => (p.price * percent) <= maxPerTaskCommission);

        if (validProducts.length === 0) {
            return res.status(404).json({ message: "No products fit the commission-per-task requirement." });
        }

        // Shuffle products to ensure randomness
        const shuffled = validProducts.sort(() => 0.5 - Math.random());

        let selectedProduct = null;
        let finalPrice = 0;
        let finalCommission = 0;
        let packSize = 1;

        for (const product of shuffled) {
            let i = 1;
            while ((product.price * (i + 1)) * percent <= maxPerTaskCommission) {
                i++;
            }

            const totalPrice = Math.round(product.price * i * 1000) / 1000;
            const commission = Math.round(totalPrice * percent * 1000) / 1000;

            if (commission <= maxPerTaskCommission) {
                selectedProduct = product.toObject();
                finalPrice = totalPrice;
                finalCommission = commission;
                packSize = i;
                break;
            }
        }

        if (!selectedProduct) {
            return res.status(404).json({ message: "No suitable product found within commission limits." });
        }

        selectedProduct.price = finalPrice;
        selectedProduct.title += ` (Pack of ${packSize})`;
        selectedProduct.commission = finalCommission;

        // Check for premium task override
        const premiumTask = await PremiumTask.findOne({ userId, status: "not completed" });
        const dailyTask = await DailyTask.findOne({ userId, date: today });

        if (premiumTask && dailyTask && (dailyTask.task_count + 1) === premiumTask.task_no) {
            selectedProduct.price = premiumTask.taskAmount;
            selectedProduct.commission = premiumTask.commission;
        }

        if (premiumTask && !dailyTask && premiumTask.task_no === 1) {
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
