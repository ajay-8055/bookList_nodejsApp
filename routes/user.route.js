const express = require("express");
const userController = require("../controllers/user.controller.js");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.delete("/remove/:id", userController.removeUser);

module.exports = userRouter;
