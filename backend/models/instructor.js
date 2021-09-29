const mongoose = require('mongoose')

const Schema = mongoose.Schema

const instructorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
  
    }, {
    timestamps: true,
}
);

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;

