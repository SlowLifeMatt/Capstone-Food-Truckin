const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
    name: {type: String, required: false},
    img: {type: String, required: false},
    avgprice: {type: String, required: false},
    link: {type: String, required: false},
})

const Truck = mongoose.model("Truck", truckSchema)

module.exports = Truck