const express = require('express');
const router = express.Router();
const { createQuestion, createQuiz, playQuiz, displayQuizzes } = require('../controller/quiz.controller');

router.get('/', (req,res) => {
    res.send("hello");
})

router.post('/create-question', createQuestion);

router.post('/create-quiz', createQuiz);

router.post('/play-quiz', playQuiz);

router.get('/quiz/:id', displayQuizzes);

module.exports = router;
