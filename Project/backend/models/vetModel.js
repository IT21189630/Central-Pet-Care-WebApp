const mongoose = require("mongoose");

const vetSchema = mongoose.Schema({
    vcslId: {
        type: String,
        unique: true,
    },
    vetName: {
        type: String,
        required: [true, 'Please add veterinary surgeon name']
    },
    telephone: {
        type: Number,
        required: [true, 'Please add telephone number']
    },
    email: {
        type: String,
        required: [true, 'Please add email address']
    },
    experience: {
        type: String,
        required: [true, 'Please add experience']
    },
    qualification: {
        type: String,
        required: [true, 'Please add qualification']
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Vets', vetSchema);
