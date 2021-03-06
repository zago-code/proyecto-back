const express = require('express')
const app = express()

const config = require('./config')
const users = require('./routes/users.js');

app.use(express.json())

users(app)

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://localhost:${config.port}`)
})