const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {

    res.cookie('refresh_token', '123456', {
        httpOnly: true,
        secure: false,
        maxAge: 2 * 60 * 1000,
        // set cookies to all domains and subdomains
        domain: 'localhost',
    })

    res.json({
        ok: true
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})