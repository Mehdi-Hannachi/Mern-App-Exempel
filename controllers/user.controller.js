const User = require("../models/User");

exports.getUserById = async (req, res) => {
  const id = req.user._id;

  try {
    const user = await User.findById(id).populate("products");

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "Get user failed" }] });
  }
};
