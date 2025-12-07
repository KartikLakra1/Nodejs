const express = require("express");
const Urls = require("../Models/url.models");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await Urls.find();
  return res.render("home", { urls: allUrls });
});

module.exports = router;
