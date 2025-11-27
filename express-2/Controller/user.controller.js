const User = require("../Models/model.users");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    return res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const addUser = async (req, res) => {
  const { first_name, last_name, email, gender } = req.body;
  try {
    if (!first_name || !last_name || !email || !gender) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const findemail = await User.findOne({ email: email });
    if (findemail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const newUser = new User({ first_name, last_name, email, gender });
    await newUser.save();

    return res.status(201).json({
      message: "User added successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { getAllUsers, addUser };
