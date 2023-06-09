import styled from 'styled-components/macro';

export const MissionCardContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
  /* overflow: scroll; */
`

export const MissionCardFront = styled.button`
    /* background-color: #0A99FF; */
    // background-color: #0878D4;
    // background-color: #31E1F7;
    background-color: #47B5FF;
    width: 110px;
    height: 110px;
    border: none;
    border-radius: 10%;
    margin: 10px;
    color: white;
    font-family: 'Gill Sans', serif;
    font-weight: 650;    
    text-transform: uppercase;
    font-size: 13px;

    :disabled{
      // background-color: rgba(10, 153, 254, 0.5);
      background-color: #68B984;
      opacity: 60%;
      color: rgba(255, 255, 255, 0.5)
    }

    @media (min-width: 668px) {
      width: 200px;
      height: 200px;
      font-size: 20px;
    }
`

export const MissionCardBack = styled.div`
  text-align: center;
  justify-content: center;
  `

export const PopupModal = styled.div`
  display: flex;
  font-family: 'Gill Sans', serif;   
  font-size: 20px;
  color: white;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  height: 300px;
  text-align: center;
  padding: 5%;
  border-radius: 5%;
  // background-color: #FCD19C;
  background-color: #FFB200;
  box-shadow:  0px 0px 0px 9999px rgba(255, 255, 255, 0.5);
  `

export const CloseButton = styled.button`
width: 30px;
height: 30px;
border-radius: 5px;
border-style: none;
// background-color: rgb(40, 127, 219);
background-color: #6E85B7;
color: white;
margin-top: 10px;
`

export const MissionCardText = styled.p`
  text-align: center;
`