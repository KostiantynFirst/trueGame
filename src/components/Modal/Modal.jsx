import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader } from "./Modal.styled";
import { MaodalwindowContainer } from "components/Modalwindow/Modalwindow";

export const ModalGame = () => {

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [isYesClicked, setIsYesClicked] = useState(false);
  
  const generateRandomTrajectory = () => {
    const length = 10; // Specify the desired length of the trajectory
    const maxWidth = 420; // Maximum horizontal offset
    const maxHeight = 420; // Maximum vertical offset
    
    let trajectory = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < length; i++) {
      let direction = Math.floor(Math.random() * 4); // Generate a random number from 0 to 3

      // Update the coordinates based on the random direction
      switch (direction) {
        case 0: // Up
          if (y < maxHeight) y += 40;
          break;
        case 1: // Right
          if (x < maxWidth) x += 40;
          break;
        case 2: // Down
          if (y > -maxHeight) y -= 40;
          break;
        case 3: // Left
          if (x > -maxWidth) x -= 40;
          break;
          default:
            x = 0
            y = 0
      }

      trajectory.push({ x, y });
    }

    setButtonOffset(trajectory[trajectory.length - 1]);
  };

  const handleYesClick = () => {
    setIsYesClicked(true);
  }

  return (
    <>
    {isYesClicked ? (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Я и не сомневался!</ModalHeader>
        </Modalcontent> 
      </Modalwindow>
    ) : (
      <MaodalwindowContainer
        handleYesClick={handleYesClick}
        generateRandomTrajectory={generateRandomTrajectory}
        buttonOffset={buttonOffset}
      />
    )}
    </>
    );
  };
  