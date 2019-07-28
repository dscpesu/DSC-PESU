const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const workshopRoutes = require('./routes/workshop')

const PORT = 8080

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://0.0.0.0:27017/dscpesu', {useNewUrlParser:true})
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established")
})

app.use('/workshop', workshopRoutes)

app.listen(PORT, () => {
    console.log("Server is running in port " + PORT)
})
