const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const http = require('http')
const socketIO = require('socket.io')
const testingRepository = require('./repository/testing.repository')

const connectDB = require('./config/db.config')

const authRouter = require('./routes/auth.routes')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('message', (data) => {
    testingRepository.performanceEstimation(data)
    socket.emit('response', 'Received your message: ' + data)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))

connectDB()

app.use(authRouter)

server.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`)
})
