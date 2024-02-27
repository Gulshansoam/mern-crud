import React, { useEffect, useState } from "react";
import WorkoutDetailComponent from "../components/WorkoutDetailComponent";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [allWorkouts, setAllWorkouts] = useState(null);

  useEffect(() => {
    fetchWorkout();
  }, []);

  const fetchWorkout = async () => {
    const response = await fetch("/api/workouts");
    const json = await response.json();
    if (response.ok) setAllWorkouts(json);
  };

  return (
    <div className="home">
      <div className="workouts">
        {allWorkouts &&
          allWorkouts?.map((workout) => (
            <WorkoutDetailComponent workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
