const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.post("/products", ProductController.createProduct);
router.get("/products", ProductController.listProductsByCategory);

module.exports = router;
