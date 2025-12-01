const express = require("express");

const router = express.Router();
const {
  createShortUrl,
  getTheShortUrl,
} = require("../Controller/url.controller");

router.route("/").post(createShortUrl);
router.route("/:shortCode").get(getTheShortUrl);

module.exports = router;
