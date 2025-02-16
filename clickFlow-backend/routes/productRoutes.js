const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/fetchProducts", productController.fetchProducts);


module.exports = router;