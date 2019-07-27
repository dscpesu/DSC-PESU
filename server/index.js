const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = express.Router()

let workshops = require('./workshop.model')

const PORT = 8080

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/workshop', routes)

mongoose.connect('mongodb://0.0.0.0:27017/dscpesu', {useNewUrlParser:true})
const connection = mongoose.connection

connection.once('open', () => {
    console.log("MongoDB database connection established")
})

app.get('/', (req, res) => {
    res.send("Hello world!")
})

routes.route('/get').get((req, res) => {
    workshops.find((err, work) => {
        if (err) {
            console.log(err)
        } else {
            res.json(work)
        }
    })
})

routes.route('/add').post((req, res) => {

    let workshop = new workshops(req.body)
    workshop.save()
        .then(workshop => {
            res.status(200).json({'workshop' : "added successfully"})
        })
        .catch(err => {
            res.status(400).json({'workshop':'Adding new workshop failed'})
        })
})

app.listen(PORT, () => {
    console.log("Server is running in port " + PORT)
})
