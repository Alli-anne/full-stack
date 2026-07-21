const express = require('express');
const Task = require('../models/task');
const Streak = require('../models/streak');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        const wasCompleted = task.completed;
        task.completed = !task.completed;

        if (wasCompleted) {
            const streak = await Streak.findOne();
            if (streak) {
                streak.weeklyStreak = Math.max(0, streak.weeklyStreak - 1);
                streak.lifetimeStreak = Math.max(0, streak.lifetimeStreak - 1);
                await streak.save();
            }
        } else {
            const streak = await Streak.findOne();
            if (streak) {
                streak.weeklyStreak += 1;
                streak.lifetimeStreak += 1;
                await streak.save();
            }
        }

        task.date = Date.now();
        task.real_time = req.body.real_time;
        await task.save();
        res.json(task);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;