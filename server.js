const express = require('express')
const  connectDB  = require('./config/db')
const login = require("./router/loginRouter")
require('dotenv').config()
const  PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.use(express.urlencoded({extended : true}))


connectDB()



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})