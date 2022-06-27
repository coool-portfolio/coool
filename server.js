// require express and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// need for heroku deploy
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// PORT
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on localhost:${PORT}!`);
  });
});