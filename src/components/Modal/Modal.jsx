import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  const handleButtonHover = () => {
    const randomOffsetX = Math.floor(Math.random() * 210) - 10; // Случайное смещение по оси X от -10 до 10
    const randomOffsetY = Math.floor(Math.random() * 210) - 10; // Случайное смещение по оси Y от -10 до 10

    setButtonOffset({ x: randomOffsetX, y: randomOffsetY });
  };

    return (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Ты гей?</ModalHeader>
          <Buttoncontainer>
            <BtnYes>Да</BtnYes>
            <BtnNo             
              onMouseEnter={handleButtonHover}
              style={{
              transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)`
}}
            >Нет</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
      </Modalwindow>
    );
  };
  