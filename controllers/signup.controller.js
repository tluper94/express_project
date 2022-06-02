const bcrypt = require('bcrypt');
const users = require('../models/users.model');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if ((!name, !email, !password)) {
    res.status(400).send(JSON.stringify({ message: 'Invalid fields' }));
    return;
  }

  const validateUser = users.some((user) => user.email === email);

  if (!validateUser) {
    const securePass = await bcrypt.hash(password, 10);
    users.push({ name: name, email: email, password: securePass });
    res.status(200).send(JSON.stringify({ name: name, emai: email }));
  } else {
    res.status(400).send(JSON.stringify({ message: 'User already exist' }));
  }

  console.log(users);
};

module.exports = signup;
