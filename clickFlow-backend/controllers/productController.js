const Products = require("../models/productModal");

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
    const { deposit } = req.body;
    try {
        
        const products = await Products.find({ price: { $lt: deposit } });

        if (products.length === 0) {
            return res.status(404).json({ message: "No products found under the specified price." });
        }

        const randomIndex = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomIndex];

        let closestMultiplier = 0;

        // products.forEach(product => {
        //     const multiplier = Math.floor(deposit / product.price);
        //     const adjustedPrice = product.price * multiplier;

        //     if (adjustedPrice <= deposit && adjustedPrice > (closestProduct ? closestProduct.price * closestMultiplier : 0)) {
        //         closestProduct = product;
        //         closestMultiplier = multiplier;
        //     }
        // });
        let i = 1

        while((selectedProduct.price * (i + 1)) < deposit){
            i++;
        }
        selectedProduct.price = Math.round((parseFloat(selectedProduct.price * i)) * 1000) / 1000;
        selectedProduct.title +=  ` (Pack of ${i})`
        res.status(200).json(selectedProduct);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { fetchProducts, fetchSingleProduct };
