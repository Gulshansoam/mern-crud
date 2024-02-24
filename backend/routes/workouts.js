const express = require("express");
const router = express.Router();
const Workout = require("../models/modelWorkout");
const {
  createWorkout,
  getOneWorkOut,
  getAllWorkouts,
} = require("../controllers/workoutController");

// get all workouts
router.get("/", getAllWorkouts);
//  get single workout
router.get("/:id", getOneWorkOut);
// POST workout
router.post("/", createWorkout);
// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});
// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
