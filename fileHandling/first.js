const http = require("http");
const fs = require("fs");
console.log("File handling in JavaScript ");

const server = http.createServer((req, res) => {
  fs.appendFileSync(
    "./output.txt",
    `Request made at: ${Date.now()} : ${req.url} with IP address ${
      res.socket.remoteAddress
    }\n`,
    (err) => {
      if (err) {
        console.error("Erro writing to log file", err);
      } else console.log("Log updated");
    }
  );

  if (req.url == "/") {
    res.write("<h1>Welcome to the Home Page</h1>");
    res.end();
  } else {
    res.write("<h1>404 Page Not Found</h1>");
    res.end();
  }
});

server.listen(8000, () => {
  console.log(`server is listening on http://localhost:8000`);
});

// writing in a file
// fs.appendFileSync('output.txt', '\nWriting in the output file kartik' , (err) => {
//     if(err) console.log(err);
//     else console.log('File written successfully')
// })
