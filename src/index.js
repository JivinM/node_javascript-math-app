const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}! File ${__filename}`) // For testing purposes.
})