const express = require("express");

const router = express.Router();
const {
  createUser,
  loginUser,
  UpdateUser,
} = require("../Controller/user.controller");

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/update/:userId").put(UpdateUser);

module.exports = router;
