import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutPayload = { title, reps, load };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workoutPayload),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();
    if (!response.ok) setError(json.error);
    else {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      console.log("workout added", json);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Workout(Exercise)</h3>
      <label>Title/Exercise</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Reps</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <label>Load (in Kg)</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <button on>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;