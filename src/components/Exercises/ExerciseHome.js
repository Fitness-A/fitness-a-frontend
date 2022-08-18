import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../Exercises/Exercises";
import SearchExercises from "../Exercises/SearchExercises";
import "./exercise.css";

const ExerciseHome = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default ExerciseHome;
