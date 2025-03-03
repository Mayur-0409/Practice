import http from "http"
console.log(http);

// First one is requeest and the second one is respond
// req,url can get you the url of the localhost
//We can write content according to the url provided by the req.url command
console.log("hello world");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("<h1> About</h1>");
  } else if (req.url === "/Home") {
    res.end("<h1> Home</h1>");
  } else {
    res.end("<h1> Page not found </h1>");
  }
});

//Serever creation

server.listen(5000, () => {
  console.log("Hello World");
});

// server listens all the rthings written in the server function
