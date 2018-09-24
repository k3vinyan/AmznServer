const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Miss = require('../models/miss');

router.get('/', (req, res, next) => {
   Miss.find({})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })
})

router.post('/', (req, res, next) => {
  const tba = req.body.tba;
  const route = req.body.route;

  const miss = new Miss({
    _id: new mongoose.Types.ObjectId(),
    tba: tba,
    route: route,
    cluster: req.body.route.replace(/\d+/g, "")
  })

  miss.save()
    .then(data => {
      res.send("data: " + data)
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })

})

module.exports = router;
