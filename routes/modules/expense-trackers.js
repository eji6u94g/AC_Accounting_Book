const express = require('express')
const router = express.Router()
const recordData = require('../../models/record.js')
const categoryData = require('../../models/category.js')

//create a new item
router.get('/new', (req, res) => {
  categoryData.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(category => res.render('new', { category }))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  recordData.create({ name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router