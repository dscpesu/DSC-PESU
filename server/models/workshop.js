const mongoose = require('mongoose')
const Schema = mongoose.Schema

let workshop = new Schema({
    name : {
        type: String,
        default: null,
        unique : true,
        dropDups : true
    },
    description: {
        type: String,
        default : null
    }, 
    maxPeople : {
        type: Number,
        default: 0
    },
    mainImage: {
        type: String,
        default: null
    },
    completed : {
        type: Boolean,
        default : false
    },
    organizers : {
        type : Array,
        name : {
            type : String,
            default : null
        },
        Semester : {
            type : String,
            default : null,
        },
        contactDetails : {
            type : Number,
            default : null
        }
    },
    creationDate : {
        type : Date,
        default : new Date()
    },
    organizationDate : {
        type : Date,
        default : null
    },
    venue : {
        type : String,
        default : null
    },
    images : {
        type : Object,
        default : Array
    }
})

module.exports = mongoose.model('workshop', workshop)