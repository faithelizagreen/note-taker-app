const express = require('express');
const api = require('./routes/api-routes')
const html= require('./routes/html-routes')

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', api)
app.use('/', html)
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
