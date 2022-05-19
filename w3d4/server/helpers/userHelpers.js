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

const createUser = () => {};

const updateUser = () => {};

module.exports = { authenticateUser };
