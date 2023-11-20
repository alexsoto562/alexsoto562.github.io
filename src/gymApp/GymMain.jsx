import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function GymHomePage() {
  const navigate = useNavigate();
  const handleChestDay = () => {
    navigate("/chestday");
  };
  const handleArmDay = () => {
    navigate("/armsday");
  };
  const handleBackDay = () => {
    navigate("/backday");
  };
  const handleLegDay = () => {
    navigate("/legday");
  };

  return (
    <div>
      <h2>Gym Day!</h2>
      <div>
        <Button variant="primary" onClick={handleChestDay}>
          Chest
        </Button>
        <Button variant="secondary" onClick={handleArmDay}>
          Arms 
        </Button>
        <Button variant="warning" onClick={handleBackDay}>
          Back
        </Button>
        <Button variant="danger" onClick={handleLegDay}>
          Leg
        </Button>
        
      </div>
    </div>
  );
}

export default GymHomePage;