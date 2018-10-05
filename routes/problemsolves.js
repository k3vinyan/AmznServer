const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProblemSolve = '../models/problemSolve');

router.get('/', (req, res) => {
  ProblemSolve.find({})
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.sendStatus(500).json({
        error: err
      })
    })
})

router.post('/', (req, res) => {
  const problem = new ProblemSolve({
    _id: new mongoose.Types.ObjectId(),
    tba: red.body.tba,
    route: req.body.route,
    cluster: req.body.route.replace(/\d+/g, '')
  })

  problem.save()
    .then( data => {
      res.send(data)
    })
    .catch( err => {
      res.sendStatus(500).json({
        error: err
      })
    })
});

router.get('/deleteAll', (req, res) => {
  ProblemSolve.deleteMany()
    .then( data => {
      res.send("Problem Solve Tbas deleted!")
    })
    .catch( err => {
      res.sendStatus(500).json({
        error: err
      })
    })
}

module.exports = router;
