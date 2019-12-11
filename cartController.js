// cartController.js
// Import Cart model
Cart = require("./cartModel");
// Handle index actions
exports.index = function(req, res) {
  Cart.get(function(err, carts) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Carts retrieved successfully",
      data: carts
    });
  });
};
// Handle create cart actions
exports.new = function(req, res) {
  var cart = new Cart();
  cart.amount = req.body.amount ? req.body.amount : cart.amount;
  cart.product_id = req.body.product_id;
  cart.user_id = req.body.user_id;
  // save the cart and check for errors
  cart.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New cart created!",
      data: cart
    });
  });
};
// Handle view cart info
exports.view = function(req, res) {
  Cart.findById(req.params.cart_id, function(err, cart) {
    if (err) res.send(err);
    res.json({
      message: "cart details loading..",
      data: cart
    });
  });
};
// Handle update cart info
exports.update = function(req, res) {
  Cart.findById(req.params.cart_id, function(err, cart) {
    if (err) res.send(err);
    cart.amount = req.body.amount ? req.body.amount : cart.amount;
    cart.product_id = req.body.product_id;
    cart.user_id = req.body.user_id;

    // save the cart and check for errors
    cart.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "cart Info updated",
        data: cart
      });
    });
  });
};
// Handle delete cart
exports.delete = function(req, res) {
  Cart.remove(
    {
      _id: req.params.cart_id
    },
    function(err, cart) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "cart deleted"
      });
    }
  );
};
