const http = require("http");

let backendUrl = "/backend"
const Books = ["nemunai-teka-i-drakono-kalnus"]; // get a list form google drive. for now this will work

const server = http.createServer((req, res) => {
  if (req.url === backendUrl) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    console.log("req rawHeaders:", req.rawHeaders);
    res.end("Backend is running!\n");
  
  } else if (req.url === backendUrl + "/books") {
    
    try {
      const json = JSON.stringify(Books);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(json);

    } catch (error) {
      console.error("Error fetching names:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");

    }

  } 
  
  else if (req.url === backendUrl + "/books/:book") {

    const bookName = req.params.book;
    console.log("Book slug:", bookName);
    res.send(`You requested the book: ${bookName}`);


  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  
  }
});

// server.listen(console.log("Server listening: " + Date.now()));
server.listen(3000, () => {
  console.log("Server listening: " + Date.now());
});