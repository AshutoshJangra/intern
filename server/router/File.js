const express = require("express");
const Router = express.Router();
const fileController = require("../controllers/fileController");
const authController = require("../controllers/authController");

// Router.route("/")
// 	.get(userController.getPublicUser)
// 	.post(userController.createUser);

// Router.route("/:id")
// 	.get(authController.protect, userController.getUser)
// 	.patch(userController.updateUser)
// 	.delete(userController.deleteUser);

Router.route("/upload").post( authController.protect, fileController.uploadFile);
Router.route("/:id").delete( authController.protect, fileController.deleteFile);
Router.route("/update").put( authController.protect, fileController.updateFile);


module.exports = Router;
