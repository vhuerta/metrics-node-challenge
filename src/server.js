/**
 * Entry file, loads the application middlewares and routes
 * and start the server on the given env.PORT or 3000 by default
 */

// 3rd party dependencies
const app = require("express")();
const bodyParser = require("body-parser");

// local dependencies
const router = require("./router");
const errorHandler = require("./error_handler");

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(router);

// Error handling
app.use(errorHandler.notFound);
app.use(errorHandler.serverError);

// Start the server
app.listen(PORT, () => console.log(`🚀 Server started on port: ${PORT}`));
