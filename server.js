require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('ok')
  })

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.static('./public'))
app.use(routes)

app.on('ok', () => {
  app.listen(3000,
    console.log('Server running on http://localhost:3000')
  )
})