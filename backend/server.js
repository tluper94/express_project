require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./utils/mongoDb');
const app = express();
const { protect } = require('./middleware/auth');

const { loginUser, registerUser } = require('./controllers/userController');
const User = require('./models/users.model');
const createStore = require('./controllers/createStore.controller');
const getStores = require('./controllers/getStores.controller');
const deleteStore = require('./controllers/deleteStore.controller');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});
// app.get('/finduser', protect, findUser);
app.get('/stores', protect, getStores);

app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/stores', protect, createStore);

app.delete('/stores', protect, deleteStore);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port} - http://localhost:${port}`);
});
