const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8080 

app.use('/', serveStatic(path.join(_dirname, './')))

app.use(cors())

const routes = require('./routes/routes.js')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})