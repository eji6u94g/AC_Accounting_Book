const mongoose = require('mongoose')
const dbConnectionStatus = mongoose.connection

mongoose.connect('mongodb://localhost/expensetracker_list', { useNewUrlParser: true, useUnifiedTopology: true })

dbConnectionStatus.on('error', () => {
  console.log('MongoDB failed')
})

dbConnectionStatus.once('open', () => {
  console.log('MongoDB is connected')
})

module.exports = dbConnectionStatus