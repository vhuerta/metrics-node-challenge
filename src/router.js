const { body, param } = require("express-validator");
const router = require("express").Router();

const validationMiddleware = require("./validation_middleware");
const metricsHandler = require("./metric_handler");

/**
 * Save the given metric and it's value,
 * e.g. POST /metric/key {value: 10}
 */
router.post(
  "/metric/:metric",
  [param("metric").trim().escape().not().isEmpty(), body("value").isNumeric()],
  validationMiddleware,
  metricsHandler.postMetric
);

/**
 * Returns the sum of the last hours values for the given metric,
 * e.g. GET /metric/key
 */
router.get(
  "/metric/:metric/sum",
  [param("metric").trim().escape().not().isEmpty()],
  validationMiddleware,
  metricsHandler.getMetric
);

module.exports = router;
