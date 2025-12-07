const AuthMap = new Map();

const setMap = (id, user) => {
  return AuthMap.set(id, user);
};

const getMap = (id) => {
  return AuthMap.get(id);
};

module.exports = { setMap, getMap };
