// Are objects data types ?
// No, they are data structures

const someObject = {
  name: "Pequeno Pollo",
  nickname: "Little Chicken",
  avatar: "🐔",
  age: 5,
};

// Access values of an object

// Dot notation (when we know the key exactly)

someObject.nickname;

// Square Bracket Notation (When the value of the key is inside a variable)

const someKey = "name";
someObject[someKey];

// Add values to an object (dot notation or square bracket notation)

someObject.sound = "Pock pock";

// Update a value of an object

someObject.age = 6;

// Delete a key/value pair

delete someObject.age;

console.log(someObject);

// What can we put as values inside an object

// String, Numbers, Booleans, ...
// EVEERRYYYYYYTHING

// What's a method?
// A function that is in the context of an object

someObject.makeSound = function () {
  console.log("POCK POCK");
};

// Method with 'this'

someObject.fancyMakeSound = function () {
  console.log("POCK POCK");
  console.log(`Says the ${this.name}`);
  console.log(`Also known as ${this.nickname}`);
};

someObject.fancyMakeSound();
