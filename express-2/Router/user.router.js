const express = require("express");
const { getAllUsers } = require("../Controller/user.controller");

const router = express.Router();

router.get("/user", getAllUsers);

module.exports = router;
