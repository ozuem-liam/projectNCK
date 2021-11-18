const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth");
const { product } = require("../controllers");

router.post("/", verifyToken, product.postProduct);
router.get("/", verifyToken, product.getAllProducts);
router.get("/:id", verifyToken, product.getProductById);

module.exports = router;
