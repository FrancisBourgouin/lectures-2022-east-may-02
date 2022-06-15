// Immutability

let someNumber = 5;
let someOtherNumber = someNumber;

someOtherNumber = 10;

console.log(someNumber, someOtherNumber);

const someArray = [1, 2, 3];
// const someOtherArray = someArray; BAD

const newArray = [];
for (const element of someArray) {
  newArray.push(element);
}

const someOtherArray = [...someArray]; // Shallow Copy

someOtherArray[0] = 9000;

console.log(someArray, someOtherArray);

// Assign a primitive
// Reference an object

const someFunk = [[1]];
const somePhonk = [...someFunk];

const updatedInsideArray = [...somePhonk[0]];
updatedInsideArray[0] = 5;
somePhonk[0] = updatedInsideArray;

console.log(someFunk, somePhonk);

// Multiple spread / shallow copies useful only when modifying the array

[
  {
    key: [1],
  },
];
