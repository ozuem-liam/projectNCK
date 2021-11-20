const orderService = require("../services/orderService"),
  { sendSuccess, sendError } = require("./appController");

// Public Controller

const getAllProducts = async (request, response) => {
  try {
    const { isSuccess, message, products } =
      await orderService.getAllProducts();
    if (isSuccess) {
      return sendSuccess({ response, message, data: { products } });
    }
  } catch (error) {
    return sendError({ response, error, message: error });
  }
};

const getProductDetail = async (request, response) => {
  try {
    let id = request.params.id;
    const { isSuccess, message, product } = await orderService.getProductDetail(
      { id }
    );
    if (isSuccess) {
      return sendSuccess({ response, message, data: { product } });
    }
  } catch (error) {
    return sendError({ response, error, message: error });
  }
};

/**
 * @api {PATCH} /order product
 * @apiName AddToCart
 * @apiGroup Orders
 * @apiUse AddToCartRequest
 * @apiUse AddToCartSuccessResponse
 * @apiUse AddToCartErrorResponse
 * @apiVersion 1.0.0
 */
const addToCart = async (request, response) => {
  try {
    const id = request.body.id;
    const { isSuccess, message, savedAddedProduct } =
      await orderService.addToCart({ id });
    if (isSuccess) {
      return sendSuccess({ response, message, data: { savedAddedProduct } });
    } else {
      return sendError({ response, message });
    }
  } catch (error) {
    return sendError({ response, error, message: error });
  }
};

const removeFromCart = async (request, response) => {
  try {
    const id = request.params.id;
    const { isSuccess, message, savedAddedProduct } =
      await orderService.removeFromCart({ id });
    if (isSuccess) {
      return sendSuccess({ response, message, data: { savedAddedProduct } });
    } else {
      return sendSuccess({ response, message: message });
    }
  } catch (error) {
    return sendError({ response, error });
  }
};

module.exports = {
  getAllProducts,
  getProductDetail,
  addToCart,
  removeFromCart,
};
