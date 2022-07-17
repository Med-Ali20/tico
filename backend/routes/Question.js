const express = require('express')
const Question = require('../models/Question')
const router = express.Router()


router.get('/questions', async (req, res) => {

    try {
        const questions = await Question.find()
        res.status(200).json(questions)

    } catch (error) {
        res.status(400)
    }
})

router.post('/question', async (req, res) => {
try {
    const question = await Question.create({question: req.body.question})
    res.status(201).json(question)

} catch (error) {
    res.status(403).json('Invalid Credentials')
}

})


router.put('/question', async (req, res) => {
    try {
        const question = await Question.findByIdAndUpdate(req.body.id, {
            answer: req.body.answer
        })
        res.status(201).json(question)
        
    } catch (error) {
        res.status(400)
    }
})

module.exports = router