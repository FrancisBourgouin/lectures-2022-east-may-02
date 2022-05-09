const assert = require("assert");
const sayGoodMorning = require("../sayGoodMorning");

describe("sayGoodMorning Outputs", () => {
  xit("should return a greeting if the input is a valid string", () => {
    const exampleInput = "Ricardo";
    const exampleOutput = "Good morning Ricardo";

    assert.equal(sayGoodMorning(exampleInput), exampleOutput);
  });
  xit("should return an error if the input is not a valid string", () => {
    const exampleInput = NaN;
    const exampleOutput = "YOU DONT LOOK LIKE A NAME. BOOH.";

    assert.equal(sayGoodMorning(exampleInput), exampleOutput);
  });
});

describe("sayGoodMorning Output types", () => {
  xit("should return a string type at all times", () => {
    assert.equal(typeof sayGoodMorning(), "string");
  });
});
