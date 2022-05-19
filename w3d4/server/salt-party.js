const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const hash1 = bcrypt.hashSync("Potato", salt);
const hash2 = bcrypt.hashSync("Toaster", salt);
const hash3 = bcrypt.hashSync("Poulet", salt);
const hash4 = bcrypt.hashSync("Poulet", salt);

console.log(hash1);
console.log(hash2);
console.log(hash3);
console.log(hash4);
console.log(salt);
