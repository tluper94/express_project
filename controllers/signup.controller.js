const bcrypt = require('bcrypt');
const userModel = require('../models/users.model');

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  if ((!name, !email, !password)) {
    res.status(400).send(JSON.stringify({ message: 'Invalid fields' }));
    return;
  }

  const isUser = await userModel.exists({ email: email });

  console.log(isUser);

  if (!isUser) {
    try {
      const securePass = await bcrypt.hash(password, 10);
      const user = new userModel({
        name: name,
        email: email,
        password: securePass,
      });
      await user.save();
      res
        .status(200)
        .send(JSON.stringify({ name: user.name, emai: user.email }));
    } catch (err) {
      res.status(500).send(JSON.stringify({ message: err }));
    }
  } else {
    res.status(400).send(JSON.stringify({ message: 'User already exist' }));
  }
};

module.exports = signup;
