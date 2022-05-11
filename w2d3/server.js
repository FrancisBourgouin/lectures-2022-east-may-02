// Server
// Client

// const log = element => console.log(element)

// const loopOverArray = (list, action) => {
//   for(const element of list){
//     action(element)
//   }
// }

// loopOverArray([1,2,3], log)

// Client of someone
// Server of someone

// COMPUTER -----------------> EVIL WEBSITE 1
// CLIENT                        SERVER

// COMPUTER ------> VPN ------> EVIL WEBSITE 1
// CLIENT     SERVER | CLIENT      SERVER

const fs = require("fs");
const net = require("net");

fs.readFile("./welcome.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log("NO WELCOME FILE OR SOMETHING");
  }

  console.log(data);
});

// const sayHello = () =>

// Server (island) -> Port 8124
// Client (boat)

const parrot = (message, connection) => {
  console.log(message);
  connection.write(`🦜: ${message}`);
};

const listOfClients = [];

const broadcast = (message) => {
  for (const client of listOfClients) {
    client.write(`📣: ${message}`);
  }
};

// Create a server
const server = net.createServer((connection) => {
  // Add the new client to the listOfClients
  listOfClients.push(connection);

  // Trigger the callback when there is a new connection
  console.log("client connected");

  // Set the encoding of the connection
  connection.setEncoding("utf-8");

  // On the event of 'end', do something
  connection.on("end", () => {
    console.log("client disconnected");
  });

  // On the event of 'data', do something
  connection.on("data", (data) => {
    // parrot(data, connection);
    connection.write(data);
    console.log(data);
    broadcast(data);
  });

  connection.write("hello\r\n");
});

server.listen(8124, () => {
  console.log("server bound");
});
