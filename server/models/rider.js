const mongoose = require('mongoose')

const Schema = mongoose.Schema

const riderSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required: false,
            trim: true,
        },
        email: {
            type: String,
            required: false,
            trim: true,            
        }

    }, {
    timestamps: true,
}
);

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;

