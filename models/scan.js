const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scanSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  entry: Number,
  tba: String,
  route: String,
  shift: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Scan', scanSchema);
