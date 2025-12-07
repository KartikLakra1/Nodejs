const express = require("express");
const Urls = require("../Models/url.models");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await Urls.find();
  return res.render("home", { urls: allUrls });
});

router.get("/register", async (req, res) => {
  return res.render("register");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

module.exports = router;
