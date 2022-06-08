const User = require('../models/users.model');

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
    (err, msg) => {
      err ? res.status(400).send(err) : res.send({ message: msg });
    }
  );
};

module.exports = signup;
