// HTTP Server w/ Routing

// Status messages from server:

// 20x - All good, everybody happy
// 30x - Redirection
// 40x - You fudged up (404 not found, 403 forbidden)
// 50x - Server fudged up (DB crash / logic problem / code problem)

// Request :
// Response :

// Routes
// /
// /answer

const http = require("http");

const createContent = (url) => {
  let content = "";

  if (url === "/") {
    content = JSON.stringify({
      data: "Hello World!",
      date: new Date(),
    });
  }

  if (url === "/answer") {
    content = JSON.stringify({
      data: Math.random() > 0.5 ? "yes" : "no",
      date: new Date(),
    });
  }

  return content;
};

const createContentSwitch = (url) => {
  let content = "";

  switch (url) {
    case "/":
      content = JSON.stringify({
        data: "Hello World!",
        date: new Date(),
      });
      break;
    case "/answer":
      content = JSON.stringify({
        data: Math.random() > 0.5 ? "yes" : "no",
        date: new Date(),
      });
      break;
    default:
      content = JSON.stringify({
        data: "unmapped content",
        date: new Date(),
      });
      break;
  }

  return content;
};

const createContentObj = (url) => {
  const routeContents = {
    "/": {
      data: "Hello World!",
      date: new Date(),
    },
    "/answer": {
      data: Math.random() > 0.5 ? "yes" : "no",
      date: new Date(),
    },
  };

  return JSON.stringify(routeContents[url]);
};

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(`Request received for ${req.url} using the ${req.method} method`);
  res.writeHead(200, { "Content-Type": "application/json" });

  const content = createContent(req.url);
  res.end(content);
});

server.listen(8000);
