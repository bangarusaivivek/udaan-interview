const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    quizCategoryId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
})

module.exports = model('Question', questionSchema);