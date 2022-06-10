const User = require('../models/users.model');
const JWT = require('jsonwebtoken');

const signup = async (req, res) => {
  const { username, name, email, password } = req.body;

  console.log(req.body);

  if ((!name, !email, !password)) {
    res.status(400).send(JSON.stringify({ message: 'Invalid fields' }));
    return;
  }

  User.register(
    new User({ name: name, username: username, email: email }),
    password,
    (err, user) => {
      if (err) {
        res.status(400).json({ message: 'User Already Exist' });
      } else {
        const payload = {
          id: user.id,
          expire: Date.now + 1000 * 60 * 60 * 24 * 7,
        };
        const token = JWT.sign(JSON.stringify(payload), process.env.JWTSECRET);
        res.json({ token: token });
      }
    }
  );
};

module.exports = signup;
