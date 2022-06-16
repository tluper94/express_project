const { findById } = require('../models/stores.model');
const Store = require('../models/stores.model');
const User = require('../models/users.model');

const createStore = async (req, res) => {
  console.log(req.body);
  const { storeName, taxId, address, city, state, zipCode, phone } = req.body;

  if (storeName && taxId && address && city && state && zipCode && phone) {
    try {
      const user = await User.findById(req.user._id);
      const store = new Store(req.body);

      console.log(user);

      store.save();

      user.stores = [...user.stores, store._id];

      user.save();

      res.json({ storeId: store._id, message: 'Store created successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'Error creating store' });
    }
  }
};

module.exports = createStore;
