const AuthMap = new Map();
const jwt = require("jsonwebtoken");

const setMap = (id, user) => {
  return AuthMap.set(id, user);
};

const createToken = (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  } catch (error) {
    return null;
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const getMap = (id) => {
  return AuthMap.get(id);
};

module.exports = { setMap, getMap, createToken, verifyToken };
