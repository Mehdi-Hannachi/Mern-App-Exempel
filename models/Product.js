const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  brand: String,
  model: String,
  price: String,
  desc: String,
});

module.exports = mongoose.model("Product", productSchema);
