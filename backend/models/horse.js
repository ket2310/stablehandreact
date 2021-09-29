const mongoose = require('mongoose')

const Schema = mongoose.Schema

const horseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        lessonCount: {
            type: Number,
            required: true,
        },
        lessonLimit: {
            type: Number,
            required: true,
        },
    }, {
    timestamps: true,
}
);

const Horse = mongoose.model('Horse', horseSchema);

module.exports = Horse;

