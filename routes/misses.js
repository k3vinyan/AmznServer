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
  const cluster = req.body.route.replace(/\d+/g, "")

  const miss = new Miss({
    _id: new mongoose.Types.ObjectId(),
    tba: tba,
    route: route,
    cluser: cluster
  })

  router.get('/deleteAll', (req, res, next) => {
    Miss.deleteMany()
      .save()
      .then( ()=>{
        res.send("Miss deleted")
      })
      .catch(err => {
        res.sendStatus(500).json({
          error: err
        })
      })
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
