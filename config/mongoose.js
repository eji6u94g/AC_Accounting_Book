const mongoose = require('mongoose')
const dbConnectionStatus = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/expensetracker_list'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

dbConnectionStatus.on('error', () => {
  console.log('MongoDB failed')
})

dbConnectionStatus.once('open', () => {
  console.log('MongoDB is connected')
})

module.exports = dbConnectionStatus