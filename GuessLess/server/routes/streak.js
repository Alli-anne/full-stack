const express = require('express');
const Streak = require('../models/streak');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let streak = await Streak.findOne();

        if (!streak) {
            streak = new Streak();
            await streak.save();
        }

        const today = new Date();
        const dayOfWeek = today.getDay();
        const thisWeekSunday = new Date(today);
        thisWeekSunday.setDate(today.getDate() - dayOfWeek);
        thisWeekSunday.setHours(0, 0, 0, 0);

        if (streak.weekStartDate < thisWeekSunday) {
            streak.weekStartDate = thisWeekSunday;
            streak.weeklyStreak = 0;
            await streak.save();
        }

        res.json(streak);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;