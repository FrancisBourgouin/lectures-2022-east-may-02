// Method ?

// Method is a function that has a specific context
// Method is a function that is stuck inside an object

const potato = {
  name: "Yukon Gold",
  color: "yellow",
  munch: function () {
    console.log("Ow");
  },
};

// potato.munch(10, 30, 50)

console.time();
console.log("Pouet pouet");
console.warn("Pouet pouet");
console.timeEnd();

// const someArray = [1, 2, 3];

// someArray.pop();
// someArray.push();
// someArray.forEach();
// someArray.map();
// someArray.filter();

const someFunction = function () {
  console.log("Hello!");
};

someFunction.bob = "Little Chicken";

console.log(someFunction.bob);

const number = 1;
number.a = "bob";
console.log(number.a);
