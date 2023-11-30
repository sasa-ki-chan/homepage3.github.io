const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('/docs').send('動作1');
})

app.use(function(req, res, next) {
  res.status(404).send('/docs/404.html').send('動作2');

});

app.get('/docs/danger.html',(req,res) => {
  res.status(404).send('/docs/404.html').send('動作3');

});