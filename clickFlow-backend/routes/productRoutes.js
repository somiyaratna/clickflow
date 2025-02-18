const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/fetchProducts", productController.fetchProducts);
router.post("/singleProducts", productController.fetchSingleProduct);


module.exports = router;