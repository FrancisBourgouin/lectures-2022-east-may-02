// Basic express server w/ EJS
const express = require("express");
const server = express(); // Like .createServer()
const port = 3000;

server.set("view engine", "ejs"); // view engine -> Renderer

server.use((req, res, next) => {
  console.log(`Request asked for ${req.url}`);
  next(); // Move along to the routes
});

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/secret", (req, res) => {
  if (Math.random() > 0.5) {
    res.send("You win!");
  }
  res.redirect("/");
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
