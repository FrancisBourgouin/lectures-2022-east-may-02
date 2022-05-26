const express = require("express");
const api = express.Router();

const user1 = {
  id: 1,
  email: "periodic@table.com",
  name: "Dimitri Ivanovich Mendeleiv",
  secret: "Actually prefer biology over chemistry",
};

const user2 = {
  id: 2,
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  secret: "Doesn't like pontiacs",
};

const listOfUsers = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

api.get("/secret", (req, res) => {
  const email = req.session.email;
  const user = listOfUsers[email];

  const templateVars = {
    name: user.name,
    secret: user.secret,
  };

  return res.json(templateVars);
});

api.get("/users", (req, res) => {
  return res.json(listOfUsers);
});

module.exports = api;
