const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.send(`<h1>Hello , ${req.query.name}</h1>`);
});

app.listen(5000),
  () => {
    console.log(`server is runnin on http://localhost:5000`);
  };
