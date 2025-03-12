const express = require("express");
const app = express();
require("dotenv").config();
const mongoInstance = require("./config/mongodb");
const routes = require("./routes");
const passport = require("passport");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Passport
require("./config/passport")(passport);
app.use(passport.initialize());

// MongoDB Connection
mongoInstance();

// Routes
app.get("/test", (req, res) => {
  res.send("DevOps is cool");
});
app.use("/api", routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
