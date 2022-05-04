const someMug = {
  material: "ceramic",
  color: "beige",
  volume: 400,
  content: "Tasty coffee",
};

console.log(someMug.color);

console.log(someMug["color"]);

// Square brackets vs dot notation ?

// Dot notation is quicker (Litteral)
// Square Bracket is more versatile

const someKey = "content";

console.log(someMug[someKey]);

const someObject = {
  someKey: "Welp",
  content: "Some content",
};

const dotNotationResult = someObject.someKey;
const bracketNotationResult = someObject[someKey];

console.log(dotNotationResult, bracketNotationResult);

// weather.city.name

const potato = {
  name: "Yukon Gold",
  size: "Big",
  color: "Yellow",
  keyName: "UH OH",
};

potato.name;

const showValueInConsole = function (keyName) {
  console.log(potato[keyName]);
};

showValueInConsole("name");
showValueInConsole("size");
showValueInConsole("color");
