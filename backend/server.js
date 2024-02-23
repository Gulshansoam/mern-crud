require("dotenv").config();
const express = require("express");
// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ Message: "this is a get Api" });
});

// listen for request
app.listen(process.env.PORT, () => {
  console.log(`This server is running on port ${process.env.PORT}`);
});
