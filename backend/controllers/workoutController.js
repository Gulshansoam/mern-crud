const { default: mongoose } = require("mongoose");
const Workout = require("../models/modelWorkout");

// get all workouts
const getAllWorkouts = async (req, res) => {
  const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(allWorkouts);
};

// get a single workout
const getOneWorkOut = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Workout" });
  }
  const singleWorkout = await Workout.findById(id);
  if (!singleWorkout) {
    return res.status(404).json({ error: "No such Workout" });
  }
  res.status(200).json(singleWorkout);
};

// create new workout

const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const newWorkOut = await Workout.create({ title, reps, load });
    res.status(200).json(newWorkOut);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete workout

// update a workout

module.exports = {
  createWorkout,
  getOneWorkOut,
  getAllWorkouts,
};
