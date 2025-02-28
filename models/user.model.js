const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: false },
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
