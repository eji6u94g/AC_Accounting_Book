const express = require('express')
const router = express.Router()
const recordData = require('../../models/record.js')
const categoryData = require('../../models/category.js')
const { getDateCasting, getIconClassName } = require('../../public/javascripts/function.js')

router.get('/', (req, res) => {
  Promise.all([recordData.find().lean(), categoryData.find().lean()])
    .then(results => {
      const [record, categories] = results
      record.forEach(obj => {
        obj.date = getDateCasting(obj.date)
        obj.iconClassName = getIconClassName(obj.category, categories)
      })
      res.render('index', { record })
    })
})

module.exports = router