const express = require("express");
const { getUserById } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

Router.get("/", isAuth(), getUserById);

module.exports = Router;
