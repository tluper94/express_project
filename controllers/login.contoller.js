const bcrypt = require('bcrypt');
const userModel = require('../models/users.model');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send(JSON.stringify({ message: 'Invalid fields' }));
    return;
  }

  const isUser = await userModel.exists({ email: email });

  if (!isUser) {
    res.status(400).send(JSON.stringify({ message: 'User does not exist' }));
    return;
  }

  const user = await userModel.findById(isUser);

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (isValidPassword) {
    res
      .status(200)
      .send(JSON.stringify({ name: user.name, email: user.email }));
  } else {
    res.status(400).send(JSON.stringify({ message: 'Invalid credentials' }));
  }
};

module.exports = login;
