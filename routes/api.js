const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({}).limit(10)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.put
router.post
router.get
router.delete