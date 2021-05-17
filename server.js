const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const routes = require('./routes/routes.js')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})