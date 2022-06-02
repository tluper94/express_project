require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const signup = require('./controllers/signup.controller');

const port = process.env.PORT || 8000;

const users = [];

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/signup', signup);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
