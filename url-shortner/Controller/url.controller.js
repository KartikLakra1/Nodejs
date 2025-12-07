const Urls = require("../Models/url.models");
const randomstring = require("randomstring");

const createShortUrl = async (req, res) => {
  try {
    const { redirectUrl } = req.body;

    if (!redirectUrl) {
      return res.status(400).json({ message: "Redirect URL is required" });
    }

    const existingUrl = await Urls.findOne({ redirectUrl });
    if (existingUrl) {
      return res.status(300).json({
        message: "Short URL already exists",
        data: existingUrl,
      });
    }

    const shortCode = randomstring.generate({
      charset: ["numeric", "!"],
      length: 6,
    });

    console.log(shortCode);

    const newUrl = new Urls({
      shortCode,
      redirectUrl,
      numberofClicks: 0,
    });

    await newUrl.save();

    return res.status(201).json({
      message: "Short URL created successfully",
      data: newUrl,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getTheShortUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    // console.log(shortCode);
    const urlExists = await Urls.findOne({ shortCode });
    // console.log(urlExists);
    if (!urlExists) {
      return res.status(404).json({
        message: "Short URL not found",
      });
    }

    urlExists.numberofClicks += 1;

    await urlExists.save();

    return res.status(302).redirect(urlExists.redirectUrl);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createShortUrl, getTheShortUrl };
