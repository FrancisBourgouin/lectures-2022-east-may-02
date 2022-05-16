// HTTP Server

// Status messages from server:

// 20x - All good, everybody happy
// 30x - Redirection
// 40x - You fudged up (404 not found, 403 forbidden)
// 50x - Server fudged up (DB crash / logic problem / code problem)

// Request :
// Response :

const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(`Request received for ${req.url} using the ${req.method}`);

  res.writeHead(200, { "Content-Type": "application/json" });

  const content = JSON.stringify({
    data: "Hello World!",
    date: new Date(),
  });

  res.end(content);
});

server.listen(8000);
