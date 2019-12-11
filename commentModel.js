// commentModel.js
var mongoose = require("mongoose");
// Setup schema
var commentSchema = mongoose.Schema({
  rating: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  product_id: {
    type: String
  },
  user_id: {
    type: String
  }
});
// Export comment model
var Comment = (module.exports = mongoose.model("comment", commentSchema));
module.exports.get = function(callback, limit) {
  Comment.find(callback).limit(limit);
};
