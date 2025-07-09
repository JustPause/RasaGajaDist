const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Backend is running via CommonJS!\n");
  } else if (req.url === "/backend") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Backend is running via CommonJS2!\n");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

server.listen(console.log("Server listening"));
