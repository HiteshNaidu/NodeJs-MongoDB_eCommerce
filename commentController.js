// commentController.js
// Import Comment model
Comment = require("./commentModel");
// Handle index actions
exports.index = function(req, res) {
  Comment.get(function(err, comments) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Comments retrieved successfully",
      data: comments
    });
  });
};
// Handle create comment actions
exports.new = function(req, res) {
  var comment = new Comment();
  comment.rating = req.body.rating ? req.body.rating : comment.rating;
  comment.imageURL = req.body.imageURL;
  comment.text = req.body.text;
  //product id and user id as a doregin key
  comment.product_id = req.body.product_id;
  comment.user_id = req.body.product_id;
  // save the comment and check for errors
  comment.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: "New comment created!",
      data: comment
    });
  });
};
// Handle view comment info
exports.view = function(req, res) {
  Comment.findById(req.params.product_id, function(err, comment) {
    if (err) res.send(err);
    res.json({
      message: "comment details loading..",
      data: comment
    });
  });
};
// Handle update comment info
exports.update = function(req, res) {
  Comment.findById(req.params.product_id, function(err, comment) {
    if (err) res.send(err);
    comment.rating = req.body.rating ? req.body.rating : comment.rating;
    comment.imageURL = req.body.imageURL;
    comment.text = req.body.text;
    comment.product_id = req.body.product_id;
    comment.user_id = req.body.user_id;

    // save the comment and check for errors
    comment.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "comment Info updated",
        data: comment
      });
    });
  });
};
// Handle delete comment
exports.delete = function(req, res) {
  Comment.remove(
    {
      _id: req.params.product_id
    },
    function(err, comment) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "comment deleted"
      });
    }
  );
};
