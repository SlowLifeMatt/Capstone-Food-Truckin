const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
    name: {type: String, required: false},
    img: {type: String, required: false},
    avgprice: {type: String, required: false},
    link: {type: String, required: false},
    info: {type: String, required: false},
    img1: {type: String, required: false},
    img2: {type: String, required: false},
    img3: {type: String, required: false},
})

const Truck = mongoose.model("Truck", truckSchema)

module.exports = Truck