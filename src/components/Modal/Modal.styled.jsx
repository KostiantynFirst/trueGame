import styled from "styled-components";

export const Modalwindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Modalcontent = styled.div`
    background-color: #fff;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    width: 300px;
    height: 300px;

` 
export const 
h2 {
    background: linear-gradient(45deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

export const Buttoncontainer = styled.div`
    margin-top: 20px;
` 
export const BtnYes = styled.button`
    font-size: 24px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    background-color: #4caf50;
    color: #fff;
`

export const BtnNo = styled.button`
    font-size: 24px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 4px;
    background-color: #f44336;
    color: #fff;
`
