const Users = require("../Models/user.models");
const randomstring = require("randomstring");
const { setMap } = require("../service/auth");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newUser = new Users({ name, email, password });
    await newUser.save();

    return res.status(201).redirect("/login");

    return res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await Users.findOne({ email, password });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // generate a token
    const shortCode = randomstring.generate({
      charset: ["numeric", "!"],
      length: 15,
    });

    setMap(shortCode, user);
    // setting cookies

    res.cookie("id", shortCode);

    return res.status(201).redirect("/");

    return res.status(200).json({
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const { password, isAdmin } = req.body;

    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await Users.findByIdAndUpdate(userId, { password, isAdmin }, { new: true });

    return res.status(200).json({
      message: "User updated successfully",
      beforeupdate: user,
      afterupdate: await Users.findById(userId),
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createUser, loginUser, UpdateUser };
