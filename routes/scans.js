const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Scan = require('../models/scan');

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
});

router.get('/include/:route', (req, res, next) => {
  const cluster = req.params.route;
  console.log(req.params)
  console.log(cluster)
  Scan.find({cluster: cluster})
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })
})

router.get('/exclude/:route', (req, res, next) => {
  const cluster = req.params.replace(/\d+/g, '');
  Scan.find({cluster: { $not: cluster}})
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

  Scan.estimatedDocumentCount({}, function(err, c){
    return c;
  })
  .then(count => {
    const scan = new Scan({
      _id: new mongoose.Types.ObjectId(),
      tba: req.body.tba,
      route: req.body.route,
      cluster: req.body.route.replace(/\d+/g, ''),
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
