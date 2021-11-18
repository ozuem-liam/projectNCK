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

/**
 * @description Update product
 * @param {id} id
 * @param {array} product_data
 * @returns
 */
const updateProduct = async (product_data) => {
  const query = { _id: product_data.id },
    update = { ...product_data },
    options = { upsert: false, new: true };
  console.log(query, product_data);
  const product = await Product.findOneAndUpdate(query, update, options);

  if (product) return { isSuccess: true, data: product };

  let message = messages["PRODUCT-UPDATE-ERROR"];
  return { isSuccess: false, message };
};

/**
 * @description Delete Product
 * @param {id} id
 * @returns
 */
const deleteProduct = async (id) => {
  const query = { _id: id },
    product = await Product.findOneAndRemove(query);
  if (product) return { isSuccess: true, message: "Deleted Successfully" };
  let message = messages["PRODUCT-DELETE-ERROR"];
  return { isSuccess: false, message };
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};