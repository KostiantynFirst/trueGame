import { Modalwindow, Modalcontent, ModalHeader, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {
    return (
      <Modalwindow>
        <Modalcontent>
          <ModalHeader>Ты гей?</ModalHeader>
          <Buttoncontainer>
            <BtnYes>Да</BtnYes>
            <BtnNo>Нет</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
      </Modalwindow>
    );
  };
  