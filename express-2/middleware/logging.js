const fs = require("fs");

const logfunc = (req, res, next) => {
  const log = `\nTime= ${new Date().toISOString()} Request Method= ${
    req.method
  } | Request URL= ${req.url} | ip= ${req.ip} `;

  fs.appendFile("./server.log", log, (err) => {
    if (err) {
      console.log("Error logging request : ", err);
    }
  });
  next();
};

module.exports = logfunc;
