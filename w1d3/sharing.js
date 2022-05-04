let someName = "Petit Poulet";
let otherName = someName;

console.log(someName, otherName);

otherName = "Kleines Huhn";

console.log(someName, otherName);

const someObject = { name: "Jimmy" };
const otherObject = someObject;

console.log(someObject, otherObject);

otherObject.name = "Kabby";
otherObject = 5;

console.log(someObject, otherObject);
