const express = require("express");
const userRouter = require("./user.route");

const mainRouter = express.Router();

mainRouter.use("/user", userRouter);

module.exports = mainRouter;
