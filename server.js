const express = require('express')
const helmet = require('helmet')

const carsRouter = require('./cars-router')
// const salesRouter = require('./routes/sales-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Cars API is working</h2>`)
})

server.use('/api/cars', carsRouter)
// server.use('/api/sales', salesRouter)

/* Helpers */

module.exports = server
