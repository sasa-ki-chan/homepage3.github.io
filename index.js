const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('/docs').send('<p>動作1</p>');
})

app.use(function(req, res, next) {
  res.status(404).send('/docs/404.html').send('<p>動作2</p>');

});

app.get('/docs/danger.html',(req,res) => {
  res.status(404).send('/docs/404.html').send('<p>動作3</p>');

});