const express = require("express");
const Urls = require("../Models/url.models");

const router = express.Router();

router.get("/", async (req, res) => {
  // getting id from req.user
  // let allUrls;
  // const id = req.user;
  // if (!id) {
  //   allUrls = await Urls.find({});
  // } else {
  //   allUrls = await Urls.find({ userId: id });
  // }
  try {
    let id = req.user?.id?.toString();
    console.log("req.user: ", req.user);
    let name = req.user?.name;
    console.log("id: ", id);

    const allUrls = await Urls.find({ userId: id });
    return res.render("home", { urls: allUrls, name: name });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
});

// router.get("/register", async (req, res) => {
//   return res.render("register");
// });

// router.get("/login", async (req, res) => {
//   return res.render("login");
// });

module.exports = router;
