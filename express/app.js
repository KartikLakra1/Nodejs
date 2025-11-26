const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./MOCK_DATA.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("<h1>Home Page</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send(`<h1>Hello , ${req.query.name}</h1>`);
// });

// app.use(express.urlencoded({ extended: false }));

app.use("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(
        (user, index) =>
          `<h1 key=${index}>${user.first_name} ${user.last_name}</h1>`
      )}
    </ul>
  `;
  return res.status(200).send(html);
});

app
  .route("/api/user/:id")
  .get(async (req, res) => {
    const userId = Number(req.params.id);
    const user = await users.find((u) => u.id == userId);

    const html = `
    <h1>${user.first_name} ${user.last_name}</h1>
    <h2>Email: ${user.email}</h2>
    <h2>Gender : ${user.gender}</h2>
    <h2>Vehicle: ${user.vehicle}</h2>
    `;

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).send(html);
  })
  .put((req, res) => {
    const userId = Number(req.params.id);
    // only allowd to update firstname, lastname and gender
    const { first_name, last_name, gender } = req.body;
    fs.readFile("./MOCK_DATA.json", (err, data) => {
      if (err) {
        throw err;
      }
      const users = JSON.parse(data);
    });

    const user = users.find((u) => u.id == userId);
    const updatedUser = {
      ...user,
      first_name,
      last_name,
      gender,
    };

    // from 0 to index-1
    const beforeUser = users.slice(0, userId - 1);
    // from index+1 to end
    const afterUser = users.slice(userId);
    const newUsers = [...beforeUser, updatedUser, ...afterUser];

    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(newUsers, null, 2),
      (err) => {
        if (err) throw err;
        console.log("Data updated successfully");
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json({
      message: `user with id ${userId} updated successfully`,
      data: {
        past: user,
        updated: updatedUser,
      },
    });
  });

// add user
app.post("/api/user", (req, res) => {
  const { first_name, last_name, email, gender, vehicle } = req.body;

  // 1. Read existing JSON
  fs.readFile("./MOCK_DATA.json", (err, data) => {
    if (err) {
      throw err;
    }
    const users = JSON.parse(data);
  });

  const newid = users.length + 1;
  const body = {
    id: newid,
    first_name: first_name,
    last_name: last_name,
    email: email,
    gender: gender,
    vehicle: vehicle,
  };

  users.push(body);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
    if (err) throw err;
    console.log("Data added successfully");
  });

  return res
    .status(201)
    .json({ message: `user with id ${newid} added successfully`, data: body });
});

app.listen(5000, () => {
  console.log(`server is running on url http://localhost:5000`);
});
