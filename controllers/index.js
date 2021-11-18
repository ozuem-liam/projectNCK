const AccountController = require("./accountController");
const ProductController = require("./productController");
const OrderController = require("./orderController");


const controllers = {
  account: AccountController,
  product: ProductController,
  order: OrderController,
};


module.exports = controllers;
