const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortCode: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
      unique: true,
    },
    numberofClicks: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Urls = mongoose.model("Url", urlSchema);

module.exports = Urls;
