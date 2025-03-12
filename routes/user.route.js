// user.routes.js - User Routes

const express = require("express");
const userController = require("../controllers/user.controller.js");
const passport = require("passport");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.delete("/remove/:id", userController.removeUser);
userRouter.post("/login", userController.login);
userRouter.get("/protected", passport.authenticate("jwt", { session: false }), userController.protected);

module.exports = userRouter;