const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    name: String,
    company:String,
    price:Number,
    colors:[String],
    image:String,
    category:String,
    isFeatured:Boolean,
})

module.exports = mongoose.model('Product', ProductSchema)
