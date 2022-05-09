const drinkCoffee = function (mug, amount) {
  // Check the mug
  if (typeof mug !== "object") {
    return "NO MUG CHAOS ENSUES EVIL RISES MWAHAHA";
  }
  // Check the amount
  if (typeof amount !== "number" || Number(amount) < 0) {
    return "AYAYAYE HOW MUCH DO YOU WANT TO DRINK";
  }
  // Check if mug is empty
  if (mug.amountOfCoffee === 0) {
    return "THERE IS NO COFFEE LEFT (OR RIGHT)";
  }
  // Update mug
  if (mug.amountOfCoffee > amount) {
    mug.amountOfCoffee = mug.amountOfCoffee - amount;
  } else {
    mug.amountOfCoffee = 0;
    return "DRANK ALL OF IT";
  }
};

module.exports = drinkCoffee;
