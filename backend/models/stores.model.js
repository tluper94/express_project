const mongoose = require('mongoose');

const StoresSchema = mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  taxId: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
  instagram: {
    type: String,
  },
  youtube: {
    type: String,
  },
  categories: {
    type: Array,
  },
  products: {
    type: Array,
  },
  employees: {
    type: Array,
  },
  registers: {
    type: Array,
  },
  receipts: {
    type: Array,
  },
  finace: {
    type: Array,
  },
});

const Store = mongoose.model('Store', StoresSchema);

module.exports = Store;
