const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection ERROR'));
db.once('open', () => {
  console.log('Database is connected');
});

module.exports = db;
