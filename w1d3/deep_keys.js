const someObject = {
  name: "Bob",
  age: 30,
  mugs: [
    { name: "Muggy", material: "ceramic" },
    { name: "Mugginator", material: "metal" },
  ],
};

const mugsOfSomeObject = someObject.mugs;
const secondMugOfMugs = mugsOfSomeObject[1];
const materialPropertyOfSecondMug = secondMugOfMugs.material;

console.log(someObject);

console.log(someObject.mugs[1].material, materialPropertyOfSecondMug);

// a = b + 1
// b + a = 10

// b + b + 1 = 10
