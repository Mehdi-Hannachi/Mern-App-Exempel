require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const auth = require("./routes/auth");
const product = require("./routes/product");
const user = require("./routes/user");

//Create local middleware
const logger = (req, res, next) => {
  // if true ===> next
  // if false ===> blocked
  true ? next() : res.send("Blocked");
};

const app = express();

// 4 - Parse data
app.use(express.json());

// 2 - Connect data base
connectDB();

//Apply logger middleware
app.use(logger);

// 3 - Create endpoints (routes)
app.use("/user", auth);
app.use("/product", product);
app.use("/", user);

// // Show one file

// app.get("/test", (req, res) => {
//   res.sendFile(__dirname + "/public/test.html");
// });

// app.use(express.static(__dirname + "/public"));

//  1 - Run server
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(
        `The server is running on http://localhost:${process.env.PORT}`
      );
});
