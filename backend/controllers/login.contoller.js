const userModel = require('../models/users.model');
const JWT = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send(JSON.stringify({ message: 'Invalid fields' }));
    return;
  }

  userModel.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(400).send(JSON.stringify({ message: 'Error in AUTH Route' }));
    } else {
      const payload = {
        id: user.id,
        expire: Date.now + 1000 * 60 * 60 * 24 * 7,
      };
      const token = JWT.sign(payload, process.env.JWTSECRET);

      res.json({
        token: token,
      });
    }
  });
};

module.exports = login;
