const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller");
const isAuth = require("../middlewares/passport-setup");

const Router = express.Router();

// POST register user
// POST  "http://localhost:9000/auth/register"
// @desc  : user register

Router.post("/register", userRegister);

// POST login user
// POST  "http://localhost:9000/auth/login"
// @desc  : user login

Router.post("/login", userLogin);

// GET currentUser
// GET "http://localhost:9000/auth/currentUser"
// @desc get authenticated user

Router.get("/currentUser", isAuth(), (req, res) => {
  res.send(req.user);
});

module.exports = Router;
