const someFridge = {
  eggs: {
    quantity: 1,
  },
  cranberryJuice: {
    quantity: 1,
  },
  toaster: {
    quantity: 1,
  },
  nothing: {
    quantity: 1,
  },
  tupperware: {
    quantity: 1,
  },
};

const walkToTheFrigeAndDoSomething = (fridge, action) => {
  setTimeout(() => {
    if (Math.random() > 0.3) {
      return action(fridge);
    }
    return action(null);
  }, 1000);
};

const yellFridgeContent = (fridge) => {
  console.log(fridge);
};

const customYellFridgeContent = (fridge, isFancy) => {
  if (isFancy) {
    console.log("⭐⭐⭐⭐⭐");
  }
  console.log(fridge);
  if (isFancy) {
    console.log("⭐⭐⭐⭐⭐");
  }
};

const takeSomething = (fridge, ingredient) => {
  fridge[ingredient].quantity = fridge[ingredient].quantity - 1;
};

const takeTupperwareFromTheFridgeThatIWalkedTo = (fridge) => {
  fridge["Tupperware"] = fridge["Tupperware"] - 1;
};

// walkToTheFrigeAndDoSomething(someFridge, yellFridgeContent);

// walkToTheFrigeAndDoSomething(someFridge, (fridge) => takeSomething(fridge, "tupperware"));

// // takeSomething

// // (fridge) => takeSomething(fridge, "tupperware")

// const sayHello = () => console.log("Hello");

// setTimeout(() => console.log("Hello"), 1000);

// customYellFridgeContent(someFridge, true);

// const fancyYellFridgeContent = (fridge) => customYellFridgeContent(fridge, true);

// // fancyYellFridgeContent(someFridge);

// walkToTheFrigeAndDoSomething(someFridge, fancyYellFridgeContent);

// walkToTheFrigeAndDoSomething(someFridge, (fridge) =>
//   customYellFridgeContent(fridge, true)
// );

walkToTheFrigeAndDoSomething(someFridge, (fridge) => {
  if (!fridge) {
    return console.log("Oops, we fell.");
  }

  yellFridgeContent(fridge);

  walkToTheFrigeAndDoSomething(someFridge, (fridge) => {
    if (!fridge) {
      return console.log("Oops, we fell.");
    }

    takeSomething(fridge, "tupperware");

    walkToTheFrigeAndDoSomething(someFridge, (fridge) => {
      if (!fridge) {
        return console.log("Oops, we fell.");
      }
      yellFridgeContent(fridge);
    });
  });
});
