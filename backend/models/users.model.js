const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const UsersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

UsersSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UsersSchema);

module.exports = User;
