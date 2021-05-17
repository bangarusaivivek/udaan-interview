const { findByIdAndUpdate } = require('../models/question.schema');
const quesSchema = require('../models/question.schema');
const quizSchema = require('../models/quiz.schema');
const answerSchema = require('../models/submit.answer.schema');

exports.createQuestion = async (req, res) => {
    console.log(req.body);
    try {
        const ques = await new quesSchema();
        ques.question = req.body.question;
        ques.option1 = req.body.option1;
        ques.option2 = req.body.option2;
        ques.option3 = req.body.option3;
        ques.option4 = req.body.option4;
        ques.quizCategoryId = req.body.quizCategoryId;
        ques.answer = req.body.answer;
        console.log(ques)
        const quesData = await quizSchema.findByIdAndUpdate(req.body.quizCategoryId, {
            $push: {questions: ques._id}}, {
                new: true,
            }
        )
        await ques.save();
        console.log(quesData)
        return res.status(200).json({
            success: true,
            data: quesData,
        })
    }
    catch(err) {
        return res.status(400).json({
            success: false,
            error: err,
        })
    }
}

exports.createQuiz = async (req, res) => {
    console.log(req.body);
    try {
        const createQuiz = await new quizSchema();
        createQuiz.title = req.body.title;
        console.log(createQuiz)
        const quizData = await createQuiz.save();
        return res.status(200).json({
            success: true,
            data: quizData,
        })
    }
    catch(err) {
        return res.status(400).json({
            success: false,
            error: err,
        })
    }
}

exports.playQuiz = async (req, res) => {
    try {
        console.log(req.body.questionId)
        const question = await quesSchema.findById(req.body.questionId);
        console.log(question)
        if (question && question.answer === req.body.answer) {
            return res.json("correct");
        }
        else {
            return res.json("wrong")
        }
    }
    catch(err) {
        return res.status(400).json({
            success: false,
            error: err,
        })
    }
}

exports.displayQuizzes = async (req, res) => {
    try {
        const quizData = await quizSchema.find();
        
        const displayQuizItem = parseInt(req.params.id) * 3;
        console.log(displayQuizItem)
        return res.json(quizData)
    }
    catch(err) {
        return res.status(400).json({
            success: false,
            error: err,
        })
    }
}