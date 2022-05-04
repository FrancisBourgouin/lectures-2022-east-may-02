const someMug = {
  material: "ceramic",
  color: "beige",
  volume: 400,
  content: "Tasty coffee",
};

// For .. of (Arrays) element of the array
// For .. in (Objects) key in the object

// for (const key in someMug) {
//   console.log(key, someMug[key]);
// }

const listOfValues = Object.values(someMug);

for (const value of listOfValues) {
  console.log(value);
}

const listOfKeys = Object.keys(someMug);

for (const key of listOfKeys) {
  console.log(key);
}

// .forEach .map .filter
