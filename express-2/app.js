require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Router/user.router");
const Users = require("./Models/model.users");
const loggingMiddleware = require("./middleware/logging");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);

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
app.get("/", async (req, res) => {
  const allUsers = await Users.find();

  const html = `
    <h1>Hello babies of the universe</h1>
      <ul>
        ${allUsers.map(
          (user, index) =>
            `<h1 key=${index}>${user.first_name} ${user.last_name}</h1>`
        )}
      </ul>
    `;
  return res.status(200).send(html);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(
    `server is running on url http://localhost:${process.env.PORT || 3001}`
  );
});
