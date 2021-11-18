const accountService = require("../services/accountService"),
  validator = require("../utils/validation/validator"),
  validationSchema = require("../utils/validation/schemas/account"),
  { sendSuccess, sendError } = require("./appController"),
  { encrypt } = require("../utils/encryption"),
  config = require("../configs/config");
const jwt = require("jsonwebtoken");
const {
  registrationSchemaTwo,
} = require("../utils/validation/schemas/account");

/**
 * @api {PATCH} /accounts Login
 * @apiName Login
 * @apiGroup Accounts
 * @apiUse LoginRequest
 * @apiUse LoginSuccessResponse
 * @apiUse LoginErrorResponse
 * @apiVersion 1.0.0
 */
const loginUser = async (request, response) => {
  const { errors, data } = validator.validate(
    validationSchema.loginSchema,
    request.body
  );
  if (errors) {
    return sendError({ response, errors });
  }
  const {
    isSuccess,
    message,
    account = {},
    destination = "",
    accessToken,
  } = await accountService.loginUser(data);
  if (isSuccess) {
    // response.header("authorization", accessToken);
    if (destination == "dashboard") {
      loginSetUp({ response, account });
    }
    return sendSuccess({
      response,
      message,
      data: { account, destination, accessToken },
    });
  }
  return sendError({ response, message });
};

/**
 * @api {PATCH} /accounts Register
 * @apiGroup Accounts
 * @apiName Register
 * @apiUse RegisterRequest
 * @apiUse RegisterSuccessResponse
 * @apiUse RegisterErrorResponse
 * @apiVersion 1.0.0
 */
const createAccount = async (request, response) => {
  const { stage = 1 } = request.body;
  const { errors, data } = validator.validate(
    stage == 1 ? validationSchema.registrationSchemaOne : registrationSchemaTwo,
    request.body
  );
  if (errors) {
    return sendError({ response, errors });
  }
  const {
    isSuccess,
    message,
    account = {},
    destination = "",
  } = await accountService.createAccount(data);
  if (isSuccess) {
    return sendSuccess({
      response,
      message,
      data: { destination, account },
    });
  }
  return sendError({ response, message });
};

const loginSetUp = ({ response, account }) => {
  const { id, membership_type, email } = account;
  //Generate auth token and save to cookie
  const authToken = encrypt(JSON.stringify({ id, email, membership_type }));
  return (response.cookie = (config.authName, authToken));
};

/**
 * @api {GET} /accounts/logout Logout
 * @apiName Logout
 * @apiGroup Accounts
 * @apiVersion 1.0.0
 */
const logoutUser = async (request, response) => {
  //We might update a record on db
  //const { id } = request.body.currentUser;
  response.clearCookie(config.authName);
  return sendSuccess({ response, message });
};

/**
 * @api {PATCH} /accounts/reset Reset Password
 * @apiName Send Reset Password
 * @apiGroup Accounts
 * @apiUse ResetPasswordRequest
 * @apiUse ResetPasswordSuccessResponse
 * @apiVersion 1.0.0
 */
const resetPassword = async (request, response) => {
  const { errors, data } = validator.validate(
    validationSchema.resetPasswordSchema,
    request.body
  );
  if (errors) {
    return sendError({ response, errors });
  }

  const { isSuccess, message = "" } = await accountService.resetPassword(data);
  if (isSuccess) {
    return sendSuccess({ response });
  }
  return sendError({ response, message });
};

module.exports = { loginUser, createAccount, resetPassword, logoutUser };
