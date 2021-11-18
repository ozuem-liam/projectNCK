const router = require("express").Router();
const verifyToken = require("../middlewares/auth");
const { order } = require("../controllers");

router.get("/", verifyToken, order.getAllProducts);
router.get("/:id", verifyToken, order.getProductDetail);
router.post("/order", verifyToken, order.addToCart);
router.delete("/order/:id", verifyToken, order.removeFromCart);

module.exports = router;


/*
      PSP - Truck Drivers
      Commercial facility - Companies
*/


