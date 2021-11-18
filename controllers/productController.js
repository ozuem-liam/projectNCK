const productService = require("../services/productService"),
  { sendSuccess, sendError } = require("./appController"),
  upload = require("../configs/multer"),
  cloudinary = require("../configs/cloudinary"),
  multer = require("multer");

// Admin Controller

const getAllProducts = async (request, response) => {
  try {
    const { 
        isSuccess, 
        message, 
        products
    } = await productService.getAllProducts();
    if (isSuccess) {
        return sendSuccess({ response, message, data: { products } });
    }
  } catch (error) {
      console.log(error)
    return sendError({ response, error, message: error });
  }
};

const getProductById = async (request, response) => {
  try {
    let id = request.params.id;
    const { isSuccess, message, product } = await productService.getProductById(
      { id }
    );
    if (isSuccess) {
      return sendSuccess({ response, message, data: { product } });
    }
  } catch (error) {
    console.log(error);
    return sendError({ response, error, message: error });
  }
};

/**
 * @api {POST} /Post Product
 * @apiGroup Products
 * @apiName CreateProduct
 * @apiUse ProductRequest
 * @apiUse ProductSuccessResponse
 * @apiUse ProductErrorResponse
 * @apiVersion 1.0.0
 */
const postProduct = async (request, response) => {
  upload(request, response, async (err) => {
    if (err instanceof multer.MulterError) {
      response.json({ message: "Error Happened", error: err });
    } else {
      const result = await cloudinary.uploader.upload(request.file.path);
      const { name, description, price, countInStock } = request.body;
      const cloudinary_id = result.public_id;
      const image = result.secure_url;
      const {
        isSuccess,
        message,
        product = {},
      } = await productService.postProduct({
        name,
        description,
        price,
        countInStock,
        image,
        cloudinary_id,
      });

      if (isSuccess) {
        return sendSuccess({
          response,
          message,
          data: { product },
        });
      }
      return sendError({ response, message });
    }
  });
};

module.exports = { getAllProducts, getProductById, postProduct };
