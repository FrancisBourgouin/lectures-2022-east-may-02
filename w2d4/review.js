// Callbacks !

// For asynchronous / synchronous content
// One callback is nice, nested callbacks more than 2, bleh

// Promises !

// For asynchronous use, and it returns a promise object
// Chain instead of nesting
// .then / .catch / .finally

console.log("Loading !");

somePromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finished loading"));

somePromise()
  .then((result) => {
    console.log(result);
    console.log("Finished loading");
  })
  .catch((error) => {
    console.log(error);
    console.log("Finished loading");
  });

// BAD DONT DO THIS ! ! ! ! !
walkToTheFrigeAndDoSomething(someFridge)
  .then(yellFridgeContent)
  .then(() => {
    walkToTheFrigeAndDoSomething(someFridge)
      .then(yellFridgeContent)
      .then(() => {
        walkToTheFrigeAndDoSomething(someFridge).then(yellFridgeContent);
      });
  });
