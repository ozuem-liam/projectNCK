const express = require("express");
const router = express.Router();
const {verifyToken, verifyAdmin} = require("../middlewares/auth");
const { product } = require("../controllers");

router.post("/", verifyToken, verifyAdmin, product.postProduct);
router.patch("/update", verifyToken, verifyAdmin, product.updateProduct);
router.delete("/delete/:id", verifyToken, verifyAdmin, product.deletePoduct);
router.get("/", verifyToken, verifyAdmin, product.getAllProducts);
router.get("/:id", verifyToken, verifyAdmin, product.getProductById);

module.exports = router;
