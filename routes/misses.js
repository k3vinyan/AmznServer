const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Miss = require('../models/miss');

router.get('/', (req, res, next) => {
   Scan.find({})
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
  })
})

router.post('/', (req, res, next) => {
  const route = req.body.route;


  Scan.estimatedDocumentCount({}, function(err, c){
    return c;
  })
  .then(count => {
    const scan = new Scan({
      _id: new mongoose.Types.ObjectId(),
      tba: req.body.tba,
      route: req.body.route,
      cluster: cluster,
      entry: count
    })

    scan.save()
      .then(data => {
        res.send("data: " + data)
      })
      .catch(err => {
        res.sendStatus(500).json({
          error: err
        })
      })
  })
});

router.get('/deleteAll', () =>{
  Scan.deleteMany()
    .save()
    .then( ()=>{
      res.send("db deleted")
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })
});

module.exports = router;
