const { users } = require('../models/userModel');

function getUsers(req, res) {
  res.json(users);
}

module.exports = { getUsers };