const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    sku:{
        type: String,
        required: true
    },

    itemName:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },

    price:{
        type: Number,
        required: true
    },

    rackNo:{
        type: String,
        required: true
    },

    quantity:{
        type: Number,
        required: true
    },

    manufacturer:{
        type: String,
        required: true
    },

    productDescription:{
        type:String,
        required: true
    },

    productImage:{
        type:String,
        required: false
    }

},{timestamps:true})


module.exports = mongoose.model('item',itemSchema)