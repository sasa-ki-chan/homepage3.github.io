const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('/docs')
  res.send('動作1')
})

app.use(function(req, res, next) {
  res.status(404).send('/docs/404page.html').send('動作2');

});