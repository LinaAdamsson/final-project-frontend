import styled from 'styled-components/macro';

export const MissionCardContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  overflow: scroll;
`

export const MissionCardFront = styled.button`
    /* background-color: #0A99FF; */
    background-color: #0878D4;
    width: 120px;
    height: 120px;
    border: none;
    border-radius: 10%;
    margin: 10px;
    color: white;
    font-family: 'Roboto Slab', serif;    
    text-transform: uppercase;
    font-size: 14px;

    :disabled{
      background-color: rgba(10, 153, 254, 0.5);
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
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
  height: 300px;
  text-align: center;
  padding: 5%;
  border-radius: 5%;
  background-color: #FCD19C;
  box-shadow:  0px 0px 0px 9999px rgba(255, 255, 255, 0.5);
  `

export const CloseButton = styled.button`
width: 30px;
height: 30px;
border-radius: 5px;
border-style: none;
background-color: rgb(40, 127, 219);
color: white;
margin-top: 10px;
`

export const MissionCardText = styled.p`
  text-align: center;
`