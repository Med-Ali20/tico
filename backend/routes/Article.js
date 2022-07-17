const express = require('express')
const multer = require('multer')
const Article = require('../models/Article')
const router = express.Router()
const upload = multer()
const auth = require('../utils/Auth')

router.post('/AddArticle', upload.array('images'), async (req, res) => {
    try {
        const newArticle = await Article.create({
            title: req.body.title,
            paragraph: req.body.paragraph,
            section: req.body.section,
            thumbnail: req.files[0].buffer,
            images: req.files.slice(1, req.files.length).map(e => e.buffer),
            applyingAllowed: req.body.applyingAllowed
        })

        res.status(201).json(newArticle)
              
    } catch(e){ 
        res.status(400).json()
    }
})

router.get('/Articles/:section', async (req, res) => {
    try {
        const section = req.params.section
        const articles = section === 'cu' ? await Article.find({section: 'جامعة الطفل'}) : await Article.find({section: 'خدمات الحاضنة'})
        res.status(200).json(articles)
    } catch (error) {
        res.status(400).json()
    }
})

router.put('/Article:id', auth, upload.single('thumbnail'), async (req, res) => {
    try {
        const updatedArticle = await Article.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            paragraph: req.body.paragraph,
            section: req.body.section,
            thumbnail: req.file.buffer,
        })
        res.status(200).json(updatedArticle)
    } catch(e) {
        res.status(400)
    }
})

router.delete('/Article:id', auth, async (req, res) => {
    try {
        await Article.findOneAndDelete({_id: req.params.id})
        res.status(200)
    } catch (e) {
        res.status(400)
    }
})

module.exports = router