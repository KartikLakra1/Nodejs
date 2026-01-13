const { getMap, verifyToken } = require("../service/auth");

const checkloggedin = async (req, res, next) => {
  const id = await req.cookies?.id;

  if (!id) {
    return res.status(404).redirect("/login");
  }

  // get the user
  // const user = getMap(id);
  const user = verifyToken(id);

  if (!user) {
    return res.status(404).redirect("/login");
  }

  req.user = user;
  next();
};

module.exports = checkloggedin;
