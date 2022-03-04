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

  dateOfCreactionProduct: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
