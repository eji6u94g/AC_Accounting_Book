const express = require('express')
const router = express.Router()
const home = require('./modules/home.js')
const expenseTrackers = require('./modules/expense-trackers.js')

router.use('/', home)
router.use('/expensetrackers', expenseTrackers)

module.exports = router