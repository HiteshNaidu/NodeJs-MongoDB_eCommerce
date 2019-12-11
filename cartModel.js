// cartModel.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// Setup schema
var cartSchema = new Schema({
  amount: {
    type: String,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: Product
  }
});
// Export cart model
var Cart = (module.exports = mongoose.model("cart", cartSchema));
module.exports.get = function(callback, limit) {
  Cart.find(callback).limit(limit);
};
