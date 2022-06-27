// mongoose connection
const { connect, connection } = require('mongoose');

// for heroku deploy
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/cooolprojects"

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = connection;