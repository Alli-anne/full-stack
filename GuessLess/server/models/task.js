const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  estimate_time: {
    type: Number,
    default: 0
  },
  real_time: {
    type: Number,
    default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  date: {
     type: Date,
     default: Date.now
   }
});

module.exports = mongoose.model('Task', taskSchema);