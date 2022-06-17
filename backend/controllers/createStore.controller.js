const { findById } = require('../models/stores.model');
const Store = require('../models/stores.model');
const User = require('../models/users.model');

const createStore = async (req, res) => {
  const { storeName, taxId, address, city, state, zipCode, phone } = req.body;

  if (storeName && taxId && address && city && state && zipCode && phone) {
    try {
      const user = await User.findById(req.user._id);
      const data = { ...req.body, userId: user._id };
      console.log(data);
      const store = new Store(data);

      console.log(user);

      const savedStore = await store.save();

      console.log(savedStore);

      user.stores = [...user.stores, store._id];
      user.save();

      res.json({
        storeId: store,
        message: 'Store created successfully',
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: 'Error creating store' });
    }
  }
};

module.exports = createStore;
