import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  
  const generateRandomTrajectory = () => {
    const length = 10; // Specify the desired length of the trajectory
    let trajectory = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < length; i++) {
      let direction = Math.floor(Math.random() * 4); // Generate a random number from 0 to 3

      // Update the coordinates based on the random direction
      switch (direction) {
        case 0: // Up
          y+=50;
          break;
        case 1: // Right
          x+=50;
          break;
        case 2: // Down
          y-=50;
          break;
        case 3: // Left
          x-=50;
          break;
      }

      trajectory.push({ x: x, y: y });
    }

    setButtonOffset(trajectory[trajectory.length - 1]);
  };

  return (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Володя, ты гей?</ModalHeader>
          <Buttoncontainer>
            <BtnYes>Да</BtnYes>
            <BtnNo             
              onMouseEnter={generateRandomTrajectory}
              // onFocus={handleButtonHover}
              onClick={generateRandomTrajectory}
              style={{
              transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)`
}}
            >Нет</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
      </Modalwindow>
    );
  };
  