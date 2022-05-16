// Basic express server w/ EJS
const express = require("express");
const server = express(); // Like .createServer()
const port = 3000;

server.set("view engine", "ejs"); // view engine -> Renderer

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/fancy/:name", (req, res) => {
  let htmlContent = "";
  htmlContent += "<html><body>";
  htmlContent += "<h1>Hello !</h1>";
  htmlContent += `<p>Your name is ${req.params.name}</p>`;
  htmlContent += "</body></html>";

  res.send(htmlContent);
});

server.get("/superfancy/:name", (req, res) => {
  const templateVars = {
    name: req.params.name,
  };

  res.render("page", templateVars);
});

// Available
// Display
// Send information
// Transforming

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
