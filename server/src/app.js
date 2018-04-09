const express = require('express')
const bodyParse = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello'
  })
})

app.listen(process.env.PORT || 8081)
