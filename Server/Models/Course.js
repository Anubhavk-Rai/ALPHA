const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videos: {
        type: [String],
        required: true
    },
    materials: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Course', CourseSchema);
