import React, { useEffect, useState } from "react";
import WorkoutDetailComponent from "../components/WorkoutDetailComponent";

const Home = () => {
  const [allWorkouts, setAllWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) setAllWorkouts(json);
    };
    fetchWorkout();
  }, []);
  console.log(allWorkouts, "allWorkouts");
  return (
    <div className="home">
      <div className="workouts">
        {allWorkouts &&
          allWorkouts?.map((workout) => (
            <WorkoutDetailComponent workout={workout} key={workout._id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
