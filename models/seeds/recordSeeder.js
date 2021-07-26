const dbConnectionStatus = require('../../config/mongoose.js')
const record = require('../record.js')

dbConnectionStatus.once('open', () => {
  record.create(
    { name: '午餐', category: '餐飲食品', date: '2021/4/23', amount: '60' },
    { name: '晚餐', category: '餐飲食品', date: '2021/4/28', amount: '60' },
    { name: '捷運', category: '交通出行', date: '2021/4/29', amount: '120' },
    { name: '電影:驚奇隊長', category: '休閒娛樂', date: '2021/5/1', amount: '220' },
    { name: '租金', category: '家居物業', date: '2021/5/2', amount: '25000' }
  )
  console.log('Record seed data is created.')
})