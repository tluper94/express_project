const Store = require('../models/stores.model');

const getStores = async (req, res) => {
  try {
    const stores = await Store.find({ userId: req.user._id });

    res.json({ stores: stores });
  } catch (err) {
    res.status(500).json({ message: 'Could not find stores' });
  }
};

module.exports = getStores;
