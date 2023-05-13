import { Modalwindow, Modalcontent, Buttoncontainer, BtnYes, BtnNo } from "./Modal.styled";

export const ModalGame = () => {
    return (
      <Modalwindow>
        <Modalcontent>
          <h2>Are you gay?</h2>
          <Buttoncontainer>
            <BtnYes>Yes</BtnYes>
            <BtnNo>No</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
      </Modalwindow>
    );
  };
  