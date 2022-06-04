require('dotenv').config();
const express = require('express');
const db = require('./utils/mongoDb');
const app = express();

const signup = require('./controllers/signup.controller');
const login = require('./controllers/login.contoller');

const port = process.env.PORT || 8000;

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/signup', signup);
app.post('/login', login);

app.listen(port, () => {
  console.log(`Server listening on port ${port} - http://localhost:${port}`);
});
