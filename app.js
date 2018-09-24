const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const scanRoutes = require('./routes/scans');
const missRoutes = require('./routes/misses');

mongoose.connect('mongodb://' + process.env.USERNAME + ":" + process.env.PW + '@ds111963.mlab.com:11963/receiver',
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors: '));
db.once('open', ()=> {
  console.log('connected to database')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/scans', scanRoutes);
app.use('/api/misses', missRoutes);

module.exports = app;
