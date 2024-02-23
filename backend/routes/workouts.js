const express = require("express");
const router = express.Router();

// get all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});
//  get single workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET for single workout" });
});
// POST workout
router.post("/", (req, res) => {
  res.json({ message: "POSTed to add a new workout!" });
});
// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});
// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a workout" });
});

module.exports = router;
