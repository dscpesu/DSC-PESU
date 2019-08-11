const router = require('express').Router()
const workshops = require('../models/workshop')


router.route('/getAll').get((req, res) => {
    workshops.find((err, work) => {
        if (err) {
            res.status(400).json({"result" : err})
        } else {
            res.status(200).json({
                "count" : work.length,
                "workshops" : work
            })
        }
    })
})

router.route('/getOne/:name').get((req, res) => {
    workshops.findOne({"name" : req.params.name})
        .then( resp => {
            res.status(200).json({"result" : resp})
        })
        .catch( err => {
            res.status(400).json({"result" : err})
        })
})

router.route('/add').post((req, res) => {

    let workshop = new workshops(req.body)
    workshop.save()
        .then(workshop => {
            res.status(200).json({'workshop' : "added successfully"})
        })
        .catch(err => {
            res.status(400).json({"result": err.errmsg })
        })
})

router.route('/update/:name').post((req, res) => {

    workshops.findOneAndUpdate({'name' : req.params.name}, req.body)
        .then(resp => {
            res.status(200).json({"result" : resp.name + " Updated"})
        })
        .catch(err => {
            res.status(400).json({"error": err.errmsg})
        })
})

router.route('/delete/:name').delete((req, res) => {
    workshops.findOneAndDelete({'name' : req.params.name})
        .then(resp =>{
            res.status(200).json({"result" : resp})
        })
        .catch(err => {
            res.status(400).json({"result" : err})
        })
})

module.exports = router