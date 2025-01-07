const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDB = require("./db/db");

const userRoute = require("./routes/user.route");
const captainRoute = require("./routes/captain.route");

connectToDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);
app.use("/captain", captainRoute);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

module.exports = app;
