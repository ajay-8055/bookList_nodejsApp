const express = require("express");
const app = express();
require("dotenv").config();

const mongoInstance = require("./config/mongodb");
const routes = require("./routes");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize MongoDB instance
mongoInstance();
console.log("connected");

// Use the routes
app.get("/test", (req, res) => res.send("Hello World"));
app.use("/api", routes);

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
