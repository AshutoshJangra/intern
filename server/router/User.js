const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

Router.post("/signup", authController.signup);
Router.post("/login", authController.login);

Router.route("/").get(authController.protect, userController.getUserInfo);


module.exports = Router;
authController.protect, userController.getShopInfo;
