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

const jimmyFridge = {
  antimatter: { quantity: 2 },
};

// Shape of a callback is often (err, data) => ....

// Promise ? Something that you will do in the future
// Fulfilled -> Happy ending
// Rejected -> Sad ending
// Pending -> We don't know yet

const walkToTheFrigeAndDoSomethingCB = (fridge, actionWhenSuccess, actionWhenFail) => {
  setTimeout(() => {
    if (Math.random() > 0.9) {
      return actionWhenSuccess(fridge);
    }
    return actionWhenFail("We fell.");
  }, 1000);
};

const walkToTheFrigeAndDoSomething = (fridge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        return resolve(fridge);
      }
      return reject("We fell.");
    }, 1000);
  });
};

const jimmyToTheFrigeAndDoSomething = (fridge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        return resolve(fridge);
      }
      return reject("Woops wrong teleport.");
    }, 500);
  });
};

const yellFridgeContent = (fridge) => {
  console.log(fridge);
};

const takeSomething = (fridge, ingredient) => {
  fridge[ingredient].quantity = fridge[ingredient].quantity - 1;
};

// console.log(walkToTheFrigeAndDoSomething(someFridge));

// walkToTheFrigeAndDoSomething(someFridge)
//   .then((fridge) => console.log(fridge))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("our fridge odyssey is done"));

walkToTheFrigeAndDoSomething(someFridge)
  .then(yellFridgeContent)
  .then(() => walkToTheFrigeAndDoSomething(someFridge))
  .then((fridge) => takeSomething(fridge, "tupperware"))
  .then(() => walkToTheFrigeAndDoSomething(someFridge))
  .then(yellFridgeContent)
  .catch((err) => console.log(err));

Promise.race([
  walkToTheFrigeAndDoSomething(someFridge),
  jimmyToTheFrigeAndDoSomething(jimmyFridge),
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

Promise.all([
  walkToTheFrigeAndDoSomething(someFridge),
  jimmyToTheFrigeAndDoSomething(jimmyFridge),
])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
