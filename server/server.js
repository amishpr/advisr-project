const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/routes.js')(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})