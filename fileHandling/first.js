const http = require("http");
const fs = require("fs");
// third party module to parse url
const url = require("url");

console.log("File handling in JavaScript ");

const myHandlerFunction = (req, res) => {
  if (req.url == "/favicon.ico") return res.end();
  const myUrl = url.parse(req.url, true);
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
  console.log(myUrl);
  switch (myUrl.pathname) {
    case "/":
      res.end("Home Page");
      break;
    case "/about":
      const name = myUrl.query.name || "Guest";
      const className = myUrl.query.class || "N/A";
      res.end(`About Page\nHello, ${name} from class ${className}`);
      break;
    case "/search":
      const search = myUrl.query.search || "Guest";
      res.end("Here are your results from search " + search);
      break;
    default:
      res.end("404");
      break;
  }
};

const server = http.createServer(myHandlerFunction);

server.listen(8000, () => {
  console.log(`server is listening on http://localhost:8000`);
});

// writing in a file
// fs.appendFileSync('output.txt', '\nWriting in the output file kartik' , (err) => {
//     if(err) console.log(err);
//     else console.log('File written successfully')
// })
