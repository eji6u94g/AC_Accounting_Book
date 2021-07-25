const express = require('express')
const router = express.Router()
const recordData = require('../../models/record.js')
const categoryData = require('../../models/category.js')
const { getDateCasting } = require('../../public/javascripts/function.js')

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

//delete a item
router.delete('/:id', (req, res) => {
  const id = req.params.id
  recordData.findById(id)
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//edit a item
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  Promise.all([recordData.findById(id).lean(), categoryData.find().lean().sort({ _id: 'asc' })])
    .then(results => {
      const [record, categories] = results
      record.date = getDateCasting(record.date)
      res.render('edit', { record, categories })
    })
    .catch(error => console.log(error))
})

module.exports = router