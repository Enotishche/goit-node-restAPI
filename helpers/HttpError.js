const errorMessageCode = {
  400: "Bad Request",
  401: "Anauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};

const HttpError = (status, message = errorMessageCode[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = HttpError;
