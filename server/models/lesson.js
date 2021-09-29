const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema(
    {
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        rider: {
            type: Schema.Types.ObjectId,
            ref: "Rider",
        },
        instructor: {
            type: Schema.Types.ObjectId,
            ref: "Instructor",
        },
        horse: {
            type: Schema.Types.ObjectId,
            ref: "Horse68yujj",
        },
    }, {
    timestamps: true,
}
);

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;

