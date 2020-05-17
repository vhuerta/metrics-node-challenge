const { validationResult } = require("express-validator");

/**
 * Middleware that checks for validation errors in the request,
 * if any it responds with 422, otherwise it calls next
 */
function validationMiddleware(req, res, next) {
  const result = validationResult(req);
  if(result.errors.length) {
    return res.status(422).send(result.errors)
  }
  next();
}

module.exports = validationMiddleware;
