const sayGoodMorning = require("./sayGoodMorning");

console.log(sayGoodMorning("Declan")); // Should work
console.log(sayGoodMorning(111011111001)); // Should not work

const caseWhenWeHaveAName = sayGoodMorning("Declan") === "Good morning Declan";
const caseWhenWeHaveANonString =
  sayGoodMorning(10101010111) === "YOU DONT LOOK LIKE A NAME. BOOH.";

// console.log(caseWhenWeHaveAName, caseWhenWeHaveANonString);

console.assert(caseWhenWeHaveAName, "Is not showing the proper greet message");
console.assert(caseWhenWeHaveANonString, "Is not managing non strings properly");

// Proposition, test a proposition => assertion
// A potato is worth two apples (TRUE | FALSE)
