const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subcribeDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('subscriber', subscriberSchema);