const express = require('express')
const router = express.Router()
const recordData = require('../../models/record.js')
const categoryData = require('../../models/category.js')

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

function getDateCasting(time) {
  const date = new Date(time)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return year + '-' + month + '-' + day
}

function getIconClassName(recordCategory, categories) {
  const category = categories.find(category => category.name === recordCategory)
  return category.iconClass
}

module.exports = router