import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

  const generateRandomNumberWithMinDifference = (minDifference) => {
    let previousNumber = 0;
  
    return () => {
      const min = previousNumber + minDifference;
      const max = min + minDifference;
  
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      previousNumber = randomNumber;
  
      return randomNumber;
    };
  };
  
  // Пример использования функции для генерации случайных чисел с минимальной разницей 20
  const generateNumberWithMinDifference50 = generateRandomNumberWithMinDifference(50);

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  const handleButtonHover = () => {
    const minOffset = 50; // Минимальное значение смещения (50 пикселей)
    const randomOffsetX = generateNumberWithMinDifference50();
    const randomOffsetY = generateNumberWithMinDifference50();
  
    const offsetX = randomOffsetX >= 0 ? randomOffsetX + minOffset : randomOffsetX - minOffset;
    const offsetY = randomOffsetY >= 0 ? randomOffsetY + minOffset : randomOffsetY - minOffset;
  
    setButtonOffset({ x: offsetX, y: offsetY });
  };



  // const generateNumberWithMinDifference20 = generateRandomNumberWithMinDifference(20);
  
  console.log(generateNumberWithMinDifference50()); // Случайное число с минимальной разницей 20 от предыдущего
  // console.log(generateNumberWithMinDifference50()); // Случайное число с минимальной разницей 20 от предыдущего
  // console.log(generateNumberWithMinDifference50()); // Случайное число с минимальной разницей 20 от предыдущего
  // и так далее...
  
    
    return (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Володя, ты гей?</ModalHeader>
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
  