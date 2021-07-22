const dbConnectionStatus = require('../../config/mongoose.js')
const category = require('../category.js')

dbConnectionStatus.once('open', () => {
  category.create(
    { name: '家居物業', iconClass: 'fas fa-home' },
    { name: '交通出行', iconClass: 'fas fa-shuttle-van' },
    { name: '休閒娛樂', iconClass: 'fas fa-grin-beam' },
    { name: '餐飲食品', iconClass: 'fas fa-utensils' },
    { name: '其他', iconClass: 'fas fa-pen' }
  )
  console.log('Category seed data is created.')
})