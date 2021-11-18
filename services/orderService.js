const { Product } = require("../database/models/Product"),
  messages = require("../translation/message.json"),
  Cart = require("../database/schemas/order");

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return { isSuccess: true, message: "success", products };
  } catch (error) {
    return { isSuccess: false, message: "Server Error", error: error };
  }
};

const getProductDetail = async ({ id }) => {
  try {
    const product = await Product.findById(id);
    return { isSuccess: true, message: "success", product };
  } catch (error) {
    return { isSuccess: false, message: "Server Error", error: error };
  }
};

const addToCart = async ({ id }) => {
  try {
    const addedProduct = await Product.findById(id);
    const qty = addedProduct.countInStock;
    if (qty > 0) {
      Cart.save(addedProduct);
      let savedAddedProduct = Cart.getCart();
      addedProduct.countInStock--;
      addedProduct.save();
      return { isSuccess: true, message: "success", savedAddedProduct };
    } else {
      return { isSuccess: false, message: "Product not in Stock" };
    }
  } catch (error) {
    return { isSuccess: false, message: "Server Error", error: error };
  }
};

const removeFromCart = async ({ id }) => {
  try {
    const cartStatus = Cart.getCart();
    if (cartStatus !== null) {
      const product = await Cart.getCart(id);
      product.totalPrice = Cart.getCart().totalPrice - product.totalPrice;
      product.products.pop();
      const addedProduct = await Product.findById(id);
      addedProduct.countInStock++;
      addedProduct.save();
    } else {
      return { isSuccess: false, message: "Cart is Empty" };
    }
    let savedAddedProduct = Cart.getCart();
    return { isSuccess: true, message: "success", savedAddedProduct };
  } catch (error) {
    return { isSuccess: false, message: "Server Error", error: error };
  }
};

module.exports = {
  getAllProducts,
  getProductDetail,
  addToCart,
  removeFromCart,
};
