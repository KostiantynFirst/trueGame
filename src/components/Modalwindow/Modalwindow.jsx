import { Modalwindow, Modalcontent, ModalHeader, ModalParagraph, Buttoncontainer, BtnYes, BtnNo } from "components/Modal/Modal.styled"

export const MaodalwindowContainer = ({handleYesClick, generateRandomTrajectory, buttonOffset}) => {
    

    return (
        <Modalwindow>
        <Modalcontent>
          <ModalHeader>Володя, ты гей?</ModalHeader>
          <ModalParagraph>(приложение не позволяет использовать неправдивые данные)</ModalParagraph>
          <Buttoncontainer>
            <BtnYes onClick={handleYesClick}>Да</BtnYes>
            <BtnNo             
              onMouseEnter={generateRandomTrajectory}
              onClick={generateRandomTrajectory}
              style={{
              transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)`
            }}
            >Нет</BtnNo>
          </Buttoncontainer>
        </Modalcontent>
        </Modalwindow>
    )
}
