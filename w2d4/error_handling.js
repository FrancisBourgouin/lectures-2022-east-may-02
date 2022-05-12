const fs = require("fs");

// const contentOfSecret = fs.readFileSync("./secret.json", "utf-8");
// const parsedContent = JSON.parse(contentOfSecret);

// console.log(parsedContent);

// try {
//   const bob = 0;
//   bob = 5;
//   console.log(parsedContent.potato.name);
// } catch (error) {
//   console.log(error);
//   console.log("malformed input JSON");
// }

try {
  fs.readFile("./secret.json", "utf-8", (err, data) => {
    if (err) {
      return err;
    }
    const parsedContent = JSON.parse(data);

    console.log(parsedContent);

    const bob = 0;
    bob = 5;
    console.log(parsedContent.potato.name);

    console.log("ANALYSIS OF FILE COMPLETE");
  });
} catch (error) {
  // console.log(error);
  console.log("malformed input JSON");
}

// Errors ?

// let sadVariable = 5;

// sadVariable = 10;

// // throw new Error("OH NO");
// console.log("WEEEEEEEEEEEEEEEEEE");
