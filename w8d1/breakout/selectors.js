// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", quantity: 5 },
  { name: "Cookie", icon: "🍪", quantity: 2 },
  { name: "Tuna", icon: "🎣", quantity: 50 },
  { name: "Pasta", icon: "🍝", quantity: 5 },
  { name: "Potato", icon: "🥔", quantity: 9001 },
];

const heatherRun = ["🍫", "🍫", "🍫"];
const aliRun = ["🥔", "🥔", "🥔", "🥔", "🍪"];
const adamRun = ["🍝", "🍝", "🍫"];
const maddyRun = ["🍝", "🎣"];

const runReport = (run) => {
  console.log("The result of the run is:");
  for (const element of run) {
    const data = pantry.find((ingredient) => ingredient.icon === element);
    console.log(`One piece of ${data.name} (${data.icon})`);
  }
};

const runs = {
  heather: heatherRun,
  ali: aliRun,
  adam: adamRun,
  maddy: maddyRun,
};

// runs.heather = [{ name: "Chocolate", icon: "🍫", quantity: 5 },{ name: "Chocolate", icon: "🍫", quantity: 5 },{ name: "Chocolate", icon: "🍫", quantity: 5 }]

const runsWithIngredients = (runs, pantry) => {
  const output = {};
  for (const person in runs) {
    output[person] = [];
  }
  for (const person in runs) {
    for (const element of runs[person]) {
      const data = pantry.find((ingredient) => ingredient.icon === element);
      output[person].push(data);
    }
  }
  return output;
};

const result = runsWithIngredients(runs, pantry);

console.log(result);

// const betterRunReport = (run) => {
//   for (const ingredient of run) {
//     console.log(`One piece of ${ingredient.name} (${ingredient.icon})`);
//   }
// };

// betterRunReport(result.heather);
