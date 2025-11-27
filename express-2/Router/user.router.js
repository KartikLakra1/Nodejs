const express = require("express");
const { getAllUsers, addUser } = require("../Controller/user.controller");

const router = express.Router();

router.get("/user", getAllUsers);
router.post("/user", addUser);

module.exports = router;
