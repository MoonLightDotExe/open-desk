const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

const connectDB = require('./config/db.config')

const authRouter = require('./routes/auth.routes')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))

connectDB()

app.use(authRouter)

app.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`)
})
