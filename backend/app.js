const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const adminloginRouter = require("./controllers/adminlogin");
const adminsignupRouter = require("./controllers/adminsignup");
const propertiesRouter = require("./controllers/properties");
const emailRouter = require("./controllers/email");

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/public", express.static("public"));

app.use(express.json());
app.use(cors());

app.use("/api/admin/login", adminloginRouter);
app.use("/api/admin/signup", adminsignupRouter);
app.use("/api/admin/properties", propertiesRouter);
app.use("/api/email", emailRouter);

module.exports = app;
