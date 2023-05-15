import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, ModalParagraph, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [isYesClicked, setIsYesClicked] = useState(false);
  
  const generateRandomTrajectory = () => {
    const length = 10; // Specify the desired length of the trajectory
    const maxWidth = 500; // Maximum horizontal offset
    const maxHeight = 500; // Maximum vertical offset
    
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
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Володя, ты гей?</ModalHeader>
          <ModalParagraph>(приложение не позволяет использование неправдивых данных)</ModalParagraph>
          <Buttoncontainer>
            <BtnYes onClick={handleYesClick}>Да</BtnYes>
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
    )}
    </>
    );
  };
  