const express = require('express')
const router = express.Router()
const recordData = require('../../models/record.js')
const categoryData = require('../../models/category.js')
const { getDateCasting, getIconClassName } = require('../../public/javascripts/function.js')

router.get('/', (req, res) => {
  Promise.all([recordData.find().lean(), categoryData.find().lean()])
    .then(results => {
      const [record, categories] = results
      let totalAmount = 0
      record.forEach(obj => {
        obj.date = getDateCasting(obj.date)
        obj.iconClassName = getIconClassName(obj.category, categories)
        totalAmount += obj.amount
      })
      res.render('index', { record, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router