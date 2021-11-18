const productService = require("../services/productService"),
  { sendSuccess, sendError } = require("./appController"),
  validator = require("../utils/validation/validator"),
  HttpStatusCode = require("../models/HttpStatusCode"),
  productValidationSchemas = require("../utils/validation/schemas/product"),
  upload = require("../configs/multer"),
  cloudinary = require("../configs/cloudinary"),
  multer = require("multer");

// Admin Controller

/**
 * @api {GET} /Post Product
 * @apiGroup Products
 * @apiName GetProduct
 * @apiUse GetProductRequest
 * @apiUse GetProductSuccessResponse
 * @apiUse GetProductErrorResponse
 * @apiVersion 1.0.0
 */
const getAllProducts = async (request, response) => {
  try {
    const { isSuccess, message, products } =
      await productService.getAllProducts();
    if (isSuccess) {
      return sendSuccess({ response, message, data: { products } });
    }
  } catch (error) {
    console.log(error);
    return sendError({ response, error, message: error });
  }
};

/**
 * @api {GET} /Post Product
 * @apiGroup Product
 * @param {id} id
 * @apiName GetOneProduct
 * @apiUse GetOneProductRequest
 * @apiUse GetOneProductSuccessResponse
 * @apiUse GetOneProductErrorResponse
 * @apiVersion 1.0.0
 */
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

/**
 * @api {PATCH} /product/{id} Update Product
 * @apiName Update Product
 * @apiGroup Products
 * @apiUse UpdateProductRequest
 * @apiUse UpdateProductSuccessResponse
 * @apiUse UpdateProductErrorResponse
 * @apiVersion 1.0.0
 */
const updateProduct = async (request, response) => {
  const { errors, data: product_data } = validator.validate(
    productValidationSchemas.createProductSchema,
    request.body
  );
  if (errors) {
    return sendError({ response, errors });
  }
  const { isSuccess, data, message } = await productService.updateProduct(
    product_data
  );
  if (isSuccess) {
    return sendSuccess({ response, data });
  }
  return sendError({ response, message, code: HttpStatusCode.SERVER_ERROR });
};

/**
 * @api {DELETE} /delete/{id} Delete Product
 * @apiName Delete Product
 * @apiGroup Products
 * @apiUse DeleteProductRequest
 * @apiUse DeleteProductSuccessResponse
 * @apiUse DeleteProductErrorResponse
 * @apiVersion 1.0.0
 */
const deletePoduct = async (request, response) => {
  const { id } = request.params;
  const { isSuccess, message } = await productService.deleteProduct(id);
  if (isSuccess) {
    return sendSuccess({ response, message });
  }
  return sendError({ response, message, code: HttpStatusCode.SERVER_ERROR });
};

module.exports = {
  getAllProducts,
  getProductById,
  postProduct,
  updateProduct,
  deletePoduct,
};
