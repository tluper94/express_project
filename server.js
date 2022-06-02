const express = require('express');
const app = express();

const port = '8000';

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.status(200).send(JSON.parse({ message: 'Success' }));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
