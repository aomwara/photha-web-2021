const express = require('express')
const app = express()

app.get(`/`, (req, res) => {
  res.json({ message: `Welcome to APIs Zone!.` })
})

app.get(`/settings`, (req, res) => {
  res.json({
    app_name: `PN Portal UI`,
    app_version: `1.1.0`
  })
})

module.exports = app
