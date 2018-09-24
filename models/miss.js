const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const missSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tba: String,
  route: String,
  shift: String,
  cluster: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Miss', missSchema);
