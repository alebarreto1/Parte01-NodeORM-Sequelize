const express = require('express')
const routes = require('./routes/index.js')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => {
    console.log(`SERVER RUNNING -> PORT: ${port}.`)
})

module.exports = app