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

  Miss.estimatedDocumentCount({}, function(err, c){
    return c;
  })
  .then(count => {
    const miss = new Miss({
      _id: new mongoose.Types.ObjectId(),
      tba: tba,
      route: route,
      cluser: route.replace(/\d+/g, ''),
      entry: count
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
})

router.get('/deleteAll', (req, res, next) =>{
  Miss.deleteMany()
    .then((data)=>{
      res.send("db deleted")
    })
    .catch(err => {
      res.sendStatus(500).json({
        error: err
      })
    })
});

module.exports = router;
