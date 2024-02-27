import React from "react";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
const WorkoutDetailComponent = (props) => {
  const { workout, key } = props;
  const { dispatch } = useWorkoutContext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (!response.ok) throw new Error("Workout Not Deleted");
    else dispatch({ type: "DELETE_WORKOUT", payload: json });
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load(in Kgs): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>DELETE</span>
    </div>
  );
};

export default WorkoutDetailComponent;
