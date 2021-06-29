const express = require('express')
const app = express()

app.get('/settings', (req, res) => {
  res.json({
    scname: 'โพธาวัฒนาเสนี',
    'boss-name': 'จรัญ สุขเสรี'
  })
})

module.exports = app
