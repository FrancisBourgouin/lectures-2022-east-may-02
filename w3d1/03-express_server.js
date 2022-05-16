// GET (get info) / POST (post info)/ PUT (update info) / DELETE (delete info)
// Basic express server wo/ EJS
const express = require("express");
const server = express(); // Like .createServer()
const port = 3000;

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.get("/answer", (req, res) => {
  const content = {
    data: Math.random() > 0.5 ? "yes" : "no",
    date: new Date(),
  };

  res.json(content);
});

// "/repeat/5"
// "/repeat/10"

const bobList = (amountOfBobs) => {
  const bob = [];
  for (let i = 0; i < amountOfBobs; i++) {
    bob.push("Bob");
  }
  return bob;
};

// Route with a parameter (:amount => amount)
server.get("/repeat/:amount", (req, res) => {
  console.log(req.params);

  const amount = req.params.amount;

  const content = bobList(amount);

  res.json(content);
});

server.get("/users/:user_id/posts/:post_id", (rick, morty) => {
  const userId = rick.params.user_id;
  const postId = rick.params.post_id;

  morty.json({
    user: userId,
    post: postId,
  });
});

server.get("/fancy/:name", (req, res) => {
  let htmlContent = "";
  htmlContent += "<html><body>";
  htmlContent += "<h1>Hello !</h1>";
  htmlContent += `<p>Your name is ${req.params.name}</p>`;
  htmlContent += "</body></html>";

  res.send(htmlContent);
});
// server.post("/login")

// Available
// Display
// Send information
// Transforming

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
