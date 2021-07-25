const functions = {
  getDateCasting: function (time) {
    const date = new Date(time)
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    if (month.toString().length !== 2) {
      month = '0' + month.toString()
    }
    if (day.toString().length !== 2) {
      day = '0' + day.toString()
    }
    return year + '-' + month + '-' + day
  },
  getIconClassName: function (recordCategory, categories) {
    const category = categories.find(category => category.name === recordCategory)
    return category.iconClass
  },
  getFilteredRecords: function (record, fileredCategory) {
    return record.category === fileredCategory
  }
}

module.exports = functions