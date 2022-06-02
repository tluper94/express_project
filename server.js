const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = '8000';

app.use(express.static('static'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  res.status(200).send(JSON.stringify({ name: name }));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
