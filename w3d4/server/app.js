require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");
const bcrypt = require("bcryptjs");
const apiRoutes = require("./routes/apiRouter");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); //req.cookies res.cookie()
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cookieSession({
    name: "session",
    keys: ["Pequeno pollo de la pampa", "little chicken of the prairies"],
  })
);
// res.cookie() & req.cookies.email
// req.session.email

// CRUD -> GET POST PUT DELETE

// app.post(/url)
// app.put(/urls/:short_url)
// app.delete(/urls/:short_url)
const salt = bcrypt.genSaltSync(10);

const user1 = {
  id: 1,
  email: "periodic@table.com",
  name: "Dimitri Ivanovich Mendeleiv",
  password: bcrypt.hashSync(process.env.USER1_PASSWORD, salt),
  secret: "Actually prefer biology over chemistry",
};

const user2 = {
  id: 2,
  email: "pontiac@bandit.com",
  name: "Doug Judy",
  password: bcrypt.hashSync(process.env.USER2_PASSWORD, salt),
  secret: "Doesn't like pontiacs",
};

const listOfUsers = {
  "periodic@table.com": user1,
  "pontiac@bandit.com": user2,
};

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  console.log(listOfUsers);
  return res.render("index");
});

const authenticateUser = (email, password) => {
  if (!listOfUsers[email]) {
    return { error: "Email was invalid", user: null };
  }

  // if (listOfUsers[email].password !== password) {
  if (!bcrypt.compareSync(password, listOfUsers[email].password)) {
    return { error: "Password was invalid", user: null };
  }

  return { error: null, user: listOfUsers[email] };
};

app.post("/login", (req, res) => {
  // const email = req.body.email
  // const password = req.body.password

  const { email, password } = req.body;

  const { error } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/");
  }

  // res.cookie("email", email);
  req.session.email = email;
  return res.redirect("/secret");
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.get("/secret", (req, res) => {
  const email = req.session.email;
  const user = listOfUsers[email];

  const templateVars = {
    name: user.name,
    secret: user.secret,
  };

  return res.render("secret", templateVars);
});

module.exports = app;
