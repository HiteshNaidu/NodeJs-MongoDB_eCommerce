// api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to Products API!"
  });
});
// Import product controller
var productController = require("./productController");
// product routes
router
  .route("/products")
  .get(productController.index)
  .post(productController.new);
router
  .route("/products/:product_id")
  .get(productController.view)
  .patch(productController.update)
  .put(productController.update)
  .delete(productController.delete);

// Import user controller
var userController = require("./userController");
// user routes
router
  .route("/users")
  .get(userController.index)
  .post(userController.new);
router
  .route("/users/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);

// Import comment controller
var commentController = require("./commentController");
// comment routes
router
  .route("/comments")
  .get(commentController.index)
  .post(commentController.new);
router
  .route("/comments/:product_id")
  .get(commentController.view)
  .patch(commentController.update)
  .put(commentController.update)
  .delete(commentController.delete);

// Import cart controller
var cartController = require("./cartController");
// cart routes

router
  .route("/carts")
  .get(cartController.index)
  .post(cartController.new);
router
  .route("/cart/:user_id")
  .get(cartController.view)
  .patch(cartController.update)
  .put(cartController.update)
  .delete(cartController.delete);

// Export API routes
module.exports = router;
