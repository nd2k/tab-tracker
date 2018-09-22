const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

// Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Routes
require('./routes')(app)

// Sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})
