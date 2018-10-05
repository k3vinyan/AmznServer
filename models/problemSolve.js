const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSolveSchema = new Schema({
    _id: mongoose.Schema.Types.id,
    type: String,
    entry: Number,
    tba: String,
    route: String,
    shift: String,
    cluster: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProblemSolve', problemSolveSchema);
