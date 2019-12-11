// productModel.js
var mongoose = require("mongoose");
// Setup schema
var productSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  inventory: String,
  imageURL: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export product model
var Product = (module.exports = mongoose.model("product", productSchema));
module.exports.get = function(callback, limit) {
  Product.find(callback).limit(limit);
};
