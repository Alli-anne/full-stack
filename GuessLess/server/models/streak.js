const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
  weeklyStreak: {
    type: Number,
    default: 0
  },
  lifetimeStreak: {
    type: Number,
    default: 0
  },
  weekStartDate: {
   type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Streak', streakSchema);