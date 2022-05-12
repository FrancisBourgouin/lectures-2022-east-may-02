// Callback review!

const waitAndDoSomething = (time, action) => {
  setTimeout(action, time);
};

const sayGoodMorning = () => console.log("Good morning!");
const grumpyMorning = () => console.log("Hrrrmr.");

waitAndDoSomething(1000, sayGoodMorning);
waitAndDoSomething(2000, sayGoodMorning);
waitAndDoSomething(2000, grumpyMorning);

// Callbacks only for asynchronous actions? NO

const repeatAction = (amountOfTimes, action) => {
  for (let i = 0; i < amountOfTimes; i++) {
    action();
  }
};

repeatAction(10, grumpyMorning);

const fs = require("fs");

const handleFileImport = (err, data) => {
  waitAndDoSomething(1000, () => console.log(data));
};

fs.readFile("./promises.js", "utf-8", handleFileImport);
