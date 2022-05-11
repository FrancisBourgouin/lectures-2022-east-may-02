const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = net.createConnection({ host: "localhost", port: 8124 }, () => {
  client.write("Hello!");
  console.log("connected to server");
});

client.on("data", (data) => {
  setTimeout(() => {
    // client.write(data.toString());
  }, 1000);
  console.log(data.toString());
});

rl.on("line", (line) => {
  // console.log(`Received: ${line}`);
  client.write(line);
});
