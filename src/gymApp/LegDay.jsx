import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Stopwatch from "./StopWatch";
import { useNavigate } from "react-router-dom";

const ChestDay = () => {
  const [showWorkoutOptions, setShowWorkoutOptions] = useState(false);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [workoutData, setWorkoutData] = useState([]);
  const [newWorkoutName, setNewWorkoutName] = useState(""); // New state for the user's custom workout name
  const navigate = useNavigate();

  const toggleWorkoutOptions = () => {
    setShowWorkoutOptions(!showWorkoutOptions);
  };

  const selectWorkout = (workoutType) => {
    setSelectedWorkouts([...selectedWorkouts, workoutType]);
    setWorkoutData((prevData) => [
      ...prevData,
      {
        type: workoutType,
        sets: [
          {
            reps: 0,
            weight: 0,
          },
        ],
      },
    ]);
  };

  const updateWorkoutInput = (workoutIndex, setIndex, field, value) => {
    if (value < 0) {
      value = 0;
    }

    const updatedData = [...workoutData];
    updatedData[workoutIndex].sets[setIndex][field] = value;
    setWorkoutData(updatedData);
  };

  const addSetToWorkout = (workoutIndex) => {
    const updatedData = [...workoutData];
    updatedData[workoutIndex].sets.push({
      reps: 0,
      weight: 0,
    });
    setWorkoutData(updatedData);
  };

  const saveSetData = (workoutIndex) => {
    console.log(
      `Save Set button for ${selectedWorkouts[workoutIndex]} was pressed`
    );
  };

  const deleteWorkout = (workoutIndex) => {
    const updatedSelectedWorkouts = [...selectedWorkouts];
    updatedSelectedWorkouts.splice(workoutIndex, 1);

    const updatedWorkoutData = [...workoutData];
    updatedWorkoutData.splice(workoutIndex, 1);

    setSelectedWorkouts(updatedSelectedWorkouts);
    setWorkoutData(updatedWorkoutData);
  };

  const handleMainMenu = () =>{
    navigate('/GymApp');
  }

  const addCustomWorkout = () => {
    if (newWorkoutName.trim() === "") {
      console.log("Please enter a workout name."); // You can replace this with a more user-friendly notification
      return;
    }

    setSelectedWorkouts([...selectedWorkouts, newWorkoutName]);
    setWorkoutData((prevData) => [
      ...prevData,
      {
        type: newWorkoutName,
        sets: [
          {
            reps: 0,
            weight: 0,
          },
        ],
      },
    ]);
    setNewWorkoutName(""); // Clear the input field after adding the workout
  };

  return (
    <React.Fragment>
      <div>
        <Button variant="secondary" onClick={handleMainMenu}>Main Menu</Button>
        
        <Button onClick={toggleWorkoutOptions}>Choose Workout</Button>

        <Stopwatch />
        {showWorkoutOptions && (
          <div>
            <h3>Select workouts:</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {[
                "Squat",
                "Calf Extension",
                "V curls",
                "Bulgarian Slips",
              ].map((workoutType) => (
                <Card
                  key={workoutType}
                  style={{ width: "18rem", margin: "0.5rem" }}
                  onClick={() => selectWorkout(workoutType)}
                >
                  <Card.Body>
                    <Card.Title>{workoutType}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
              {/* Input field for custom workout */}
              <div>
                <input
                  type="text"
                  placeholder="Enter custom workout name"
                  value={newWorkoutName}
                  onChange={(e) => setNewWorkoutName(e.target.value)}
                />
                <Button variant="success" onClick={addCustomWorkout}>
                  Add Custom Workout
                </Button>
              </div>
            </div>
          </div>
        )}
        <div>
          <h3>Selected Workouts:</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selectedWorkouts.map((workoutType, workoutIndex) => (
              <Card
                key={workoutIndex}
                style={{ width: "18rem", margin: "0.5rem" }}
              >
                <Card.Body>
                  <Card.Title>{workoutType}</Card.Title>
                  {workoutData[workoutIndex].sets.map((set, setIndex) => (
                    <div key={setIndex}>
                      <label>Set {setIndex + 1}:</label>
                      <input
                        type="number"
                        value={set.reps || 0}
                        onChange={(e) =>
                          updateWorkoutInput(
                            workoutIndex,
                            setIndex,
                            "reps",
                            Math.max(0, parseInt(e.target.value, 10))
                          )
                        }
                      />
                      <label>Weight:</label>
                      <input
                        type="number"
                        value={set.weight || 0}
                        onChange={(e) =>
                          updateWorkoutInput(
                            workoutIndex,
                            setIndex,
                            "weight",
                            Math.max(0, parseInt(e.target.value, 10))
                          )
                        }
                      />
                    </div>
                  ))}
                  <Button
                    variant="primary"
                    onClick={() => addSetToWorkout(workoutIndex)}
                  >
                    Add Set
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => saveSetData(workoutIndex)}
                  >
                    Save Set
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteWorkout(workoutIndex)}
                  >
                    Delete Workout
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChestDay;
