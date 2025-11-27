require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Router/user.router");

const app = express();

// db connection
const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in db connection: ${error}`);
  }
};
dbConnection();

// ROUTES
app.use("/api/v1", UserRouter);

// Default route (move this to bottom & use GET)
app.get("/", (req, res) => {
  res.send("Hello from Express server");
});

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `server is running on url http://localhost:${process.env.PORT || 3001}`
  );
});
