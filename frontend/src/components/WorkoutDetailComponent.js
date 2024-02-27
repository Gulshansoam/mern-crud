import React from "react";

const WorkoutDetailComponent = (props) => {
  const { workout, key } = props;

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
    </div>
  );
};

export default WorkoutDetailComponent;
