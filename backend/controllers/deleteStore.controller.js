const User = require('../models/users.model');
const Store = require('../models/stores.model');

const deletStore = async (req, res) => {
  const { id } = req.body;

  try {
    const store = await Store.deleteOne({ _id: id });

    if (store.acknowledged) {
      const user = await User.findById(req.user._id);

      user.stores = user.stores.filter((store) => store.toString() !== id);

      user.save();
      console.log(user.stores);

      const allStores = await Store.find({ userId: user._id });

      res.json({ message: 'Store Deleted Successfully', stores: allStores });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error Deleting Store' });
  }
};

module.exports = deletStore;
