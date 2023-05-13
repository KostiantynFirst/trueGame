import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

    const [isButtonMoved, setIsButtonMoved] = useState(false);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
  
    const handleButtonHover = () => {
      setIsButtonMoved(true);
      setOffsetX(Math.floor(Math.random() * 21) - 10);
      setOffsetY(Math.floor(Math.random() * 21) - 10);
    };

    return (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Ты гей?</ModalHeader>
          <Buttoncontainer>
            <BtnYes>Да</BtnYes>
            <BtnNo             
                isMoved={isButtonMoved}
                offsetX={offsetX}
                offsetY={offsetY}
                onMouseEnter={handleButtonHover}
            >Нет</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
      </Modalwindow>
    );
  };
  