/**
 * Handler for unexisting route
 */
function notFound(_, res) {
  return res.status(404).send({});
}

/**
 * Handler for any server error
 */
function serverError(error, __, res) {
  console.error(error);
  return res.status(500).send({});
}

module.exports = { notFound, serverError };
