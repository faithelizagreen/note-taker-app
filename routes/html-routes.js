const path = require('path')
const html = require('express').Router()

// GET Route for homepage
html.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/index.html'))
);

// GET Route for notes page
html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/../public/pages/notes.html'))
);


module.exports = html;