const HttpStatusCode = require("../models/HttpStatusCode");
const PTResponse = require("../models/PTResponse");

const sendSuccess = ({
  response,
  data = {},
  message = "Request successful",
}) => {
  const resp = new PTResponse({ data, message });
  return response.status(HttpStatusCode.SUCCESS).send(resp);
};

const sendError = ({
  response,
  errors = {},
  message = "Invalid requests",
  code = HttpStatusCode.INVALID_REQUEST,
}) => {
  const resp = new PTResponse({ data: {}, message, errors });
  return response.status(code).send(resp);
};


module.exports = { sendSuccess, sendError };
