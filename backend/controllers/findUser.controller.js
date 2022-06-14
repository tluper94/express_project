const findUser = async (req, res) => {
  res.json(req.user);
};

module.exports = findUser;
