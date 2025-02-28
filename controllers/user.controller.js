const user = require("../models/user.model");
const CryptoJS = require("crypto-js");

const register = async (req, res) => {
  try {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET_TOKEN || "PASS_SECRET_TOKEN"
    ).toString();
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
  }
};

const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await user.findOne({ email });
    if (!userFound) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const originalPass = CryptoJS.AES.decrypt(
      password,
      process.env.PASS_SECRET_TOKEN || "PASS_SECRET_TOKEN"
    ).toString(CryptoJS.enc.Utf8);

    if (userFound.password !== originalPass) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, removeUser };
