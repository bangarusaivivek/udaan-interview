const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [{
        type: Schema.Types.ObjectId,
    }]

})

module.exports = model('Quiz', quizSchema);