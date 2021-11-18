const { Product } = require("../database/models/Product"),
  messages = require("../translation/message.json"),
  config = require("../configs/config");

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return { isSuccess: true, message: "success", products };
  } catch (error) {
    return { isSuccess: false, messgae: "Server Error", error: error };
  }
};

const getProductById = async ({ id }) => {
  try {
    const product = await Product.findById(id);
    return { isSuccess: true, message: "success", product };
  } catch (error) {
    return { isSuccess: false, messgae: "Server Error", error: error };
  }
};

const postProduct = async ({
  name,
  description,
  price,
  countInStock,
  image,
  cloudinary_id,
}) => {
  try {
    const product = new Product({
      name,
      description,
      price,
      countInStock,
      image,
      cloudinary_id,
    });
    product.save();
    let message = messages["CREATE-PRODUCT-SUCCESS"],
      isSuccess = true;
    return {
      isSuccess,
      message,
      product,
    };
  } catch (error) {
    let message = messages["CREATE-PRODUCT-ERROR"],
      isSuccess = false;
    return { isSuccess, message, error };
  }
};

module.exports = { getAllProducts, getProductById, postProduct };
