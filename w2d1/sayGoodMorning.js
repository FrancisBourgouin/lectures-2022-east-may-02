// Confirming that your code works the way it's supposed to

// Less reliance on a console.log party

// Writing better code

const sayGoodMorning = function (nameOfPerson) {
  // We receive nameOfPerson as a parameter
  // We want to check if nameOfPerson is not a string
  if (typeof nameOfPerson === "number") {
    // If it is, return an error message
    return "YOU DONT LOOK LIKE A NAME. BOOH.";
  }
  // If it is not, do nothing
  // return a good morning message
  return `Good morning ${nameOfPerson}`;
};

module.exports = sayGoodMorning;
