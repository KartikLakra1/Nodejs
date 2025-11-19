// Core modules
import http from "http";

// External Modules
import express from "express";

// Local Modules
import requestHandler from "./user.js";

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first Middleware", req.url, req.method);
  // res.send("<p>Welcome to first middle ware </p>");
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second Middleware", req.url, req.method);
  res.send("<h1>Welcome to second middle ware </h1>");
  next();
});

app.listen(3000, () => {
  console.log(`server is listening at http://localhost:${3000}`);
});
