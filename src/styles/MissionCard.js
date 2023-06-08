import styled from 'styled-components/macro';

export const MissionCardFront = styled.button`
    background-color: #0A99FF;
    width: 25vw;
    height: 25vh;
    border: none;
    border-radius: 10px;

    :active {
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const MissionCardBack = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: #FCD19C;
  padding: 2%;
  border-radius: 5%;
  text-align: center;
  `