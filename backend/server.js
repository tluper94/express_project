require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./utils/mongoDb');
const passport = require('passport');
const app = express();
const auth = require('./middleware/auth')();
const localStategy = require('passport-local');
const session = require('express-session');

const signup = require('./controllers/signup.controller');
const login = require('./controllers/login.contoller');
const User = require('./models/users.model');

const port = process.env.PORT || 8000;

app.use(cors());
app.use(auth.initialize());
app.use(
  session({
    secret: process.env.JWTSECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
passport.use(new localStategy(User.authenticate()));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('static'));
app.use(express.json());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.post('/signup', signup);
app.post('/login', passport.authenticate('local'), login);

app.listen(port, () => {
  console.log(`Server listening on port ${port} - http://localhost:${port}`);
});
