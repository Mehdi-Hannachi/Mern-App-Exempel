const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: {
    type: String,
  },
  email: String,
  adress: String,
  phoneNumber: String,

  photo: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "client"],
    default: "client",
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  password: String,
});

module.exports = mongoose.model("User", userSchema);
