const express = require('express');

const homepageRouter = require('./index');
const noteRouter = require ('.notes');

const app = express();

app.use('./index', homepageRouter);
app.use('/notes', noteRouter)

module.exports = app;