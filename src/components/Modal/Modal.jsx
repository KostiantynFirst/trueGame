import { useState } from "react";
import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {

  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });

  const handleButtonHover = (event) => {
    const minOffset = 100; // Минимальное значение смещения (50 пикселей)
    const randomOffsetX = Math.floor(Math.random() * 21) - 10; // Случайное смещение по оси X от -10 до 10
    const randomOffsetY = Math.floor(Math.random() * 21) - 10; // Случайное смещение по оси Y от -10 до 10
  
    const offsetX = randomOffsetX >= 0 ? randomOffsetX + minOffset : randomOffsetX - minOffset;
    const offsetY = randomOffsetY >= 0 ? randomOffsetY + minOffset : randomOffsetY - minOffset;
  
    const buttonRect = event.target.getBoundingClientRect(); // Получаем размеры и положение кнопки
    const cursorX = event.clientX; // Координата X курсора мыши
    const cursorY = event.clientY; // Координата Y курсора мыши
  
    // Проверяем, находится ли курсор мыши на том же уровне (по горизонтали) с кнопкой
    if (cursorY === buttonRect.top || cursorY === buttonRect.bottom) {
      setButtonOffset({ x: offsetX, y: offsetY });
    } else {
      setButtonOffset({ x: 0, y: 0 }); // Сбрасываем смещение, если курсор мыши не находится на том же уровне с кнопкой
    }
  };
  
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
  