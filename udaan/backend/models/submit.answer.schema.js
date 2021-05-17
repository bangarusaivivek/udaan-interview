const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const quizSchema = new Schema({
    answer: {
        type: String,
        required: true,
    },
    questionId: {
        type: Schema.Types.ObjectId,
        required: true,
    },

})

module.exports = model('answer', quizSchema);