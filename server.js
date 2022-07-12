// require express and routes
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// need for heroku deploy
const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
  app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

// PORT
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on localhost:${PORT}!`);
	});
});
