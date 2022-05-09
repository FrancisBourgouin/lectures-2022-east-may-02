const expect = require("chai").expect;
const drinkCoffee = require("../drinkCoffee");

describe("drinkCoffee input checks", () => {
  it("shows a message of chaos if we don't receive a mug object", () => {
    const mugInput = 100;
    const amountInput = 100;

    const result = drinkCoffee(mugInput, amountInput);
    const expectedResult = "NO MUG CHAOS ENSUES EVIL RISES MWAHAHA";

    expect(result).to.be.a("string");
    expect(result).to.equal(expectedResult);
  });
  it("complains if we don't specify an amount of coffee to drink", () => {
    const mugInput = { name: "Mugginator", amountOfCoffee: 9001 };
    const amountInput = undefined;

    const result = drinkCoffee(mugInput, amountInput);
    const expectedResult = "AYAYAYE HOW MUCH DO YOU WANT TO DRINK";

    expect(result).to.be.a("string");
    expect(result).to.equal(expectedResult);
  });
});

describe("drinkCoffee actions", () => {
  it("should change the original object by the amount drank", () => {
    const mugInput = {
      name: "Mugmania",
      amountOfCoffee: 500,
    };
    const amountInput = 100;

    drinkCoffee(mugInput, amountInput);

    const expectedResult = {
      name: "Mugmania",
      amountOfCoffee: 400,
    };

    // expect(result.amountOfCoffee).to.equal(expectedResult.amountOfCoffee)
    expect(mugInput).to.deep.equal(expectedResult);
  });
  it("should set the remaining amount to zero and show a message if we overdrank", () => {
    const mugInput = {
      name: "Mugmania",
      amountOfCoffee: 500,
    };
    const amountInput = 600;

    const result = drinkCoffee(mugInput, amountInput);

    const expectedResult = {
      name: "Mugmania",
      amountOfCoffee: 0,
    };

    // expect(result.amountOfCoffee).to.equal(expectedResult.amountOfCoffee)
    expect(mugInput).to.deep.equal(expectedResult);
    expect(result).to.equal("DRANK ALL OF IT");
  });
  it("should show a message if we are trying to drink from an empty mug", () => {
    const mugInput = {
      name: "Mugmania",
      amountOfCoffee: 0,
    };
    const amountInput = 60;

    const result = drinkCoffee(mugInput, amountInput);

    expect(result).to.equal("THERE IS NO COFFEE LEFT (OR RIGHT)");
  });
});

// expect(foo).to.be.a('string');

// assert.typeOf(foo, "string");
