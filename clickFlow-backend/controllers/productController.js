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

module.exports = { fetchProducts };
