// Coding Styles!

// Everything in one go

// const someObject = { a: 1, b: 2 };

// const listValuesOfObject = function (object) {
//   for (const value of object) {
//     console.log(value);
//   }
// };

// listValuesOfObject(someObject);

// Everything in one go, with comments in steps

// const someObject = { a: 1, b: 2 };

// const listValuesOfObject = function (object) {
//   console.log(object);
//   for (const key in object) {
//     console.log(key);
//     console.log(object[key]);
//   }
// };

// listValuesOfObject(someObject);

// Plan first, code second.

const someObject = { a: 1, b: 2 };

const listValuesOfObject = function (object) {
  // We receive an object as a parameter (no need to check)
  // List the values of the object
  // For..in loop for keys, then get the values
  // Object.values

  console.log(Object.values(object));
};

listValuesOfObject(someObject);
