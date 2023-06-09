import styled from 'styled-components/macro';

export const MissionBoardWrapper = styled.div`

`

export const MissionCardFront = styled.button`
    background-color: #0A99FF;
    width: 150px;
    height: 150px;
    border: none;
    border-radius: 10px;
    margin: 10px;
`

export const MissionCardBack = styled.div`
  text-align: center;
  `

export const PopupModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
  height: 300px;
  padding: 5%;
  border-radius: 5%;
  background-color: #FCD19C;
  `

export const CloseButton = styled.button`
width: 30px;
height: 30px;
align-items: flex-end;
border-radius: 5px;
border-style: none;
background-color: rgb(40, 127, 219);
color: white;
margin-top: 10px;
`