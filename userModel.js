// userModel.js
var mongoose = require("mongoose");
// Setup schema
var userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  purchaseHistory: {
    type: Date,
    default: Date.now
  },
  shippingAddress: {
    type: String,
    required: true
  }
});
// Export user model
var User = (module.exports = mongoose.model("user", userSchema));
module.exports.get = function(callback, limit) {
  User.find(callback).limit(limit);
};
