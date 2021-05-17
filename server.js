const express = require('express')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080 

app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.use(cors())

const routes = require('./routes/routes.js')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})