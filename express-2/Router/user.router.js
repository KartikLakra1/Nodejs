const express = require("express");
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../Controller/user.controller");

const router = express.Router();

// router.get("/user", getAllUsers);
// router.post("/user", addUser);

router.route("/user").get(getAllUsers).post(addUser);

router.route("/user/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
