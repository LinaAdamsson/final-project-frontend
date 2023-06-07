import styled from 'styled-components';

export const MissionCardWrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 1vw;
perspective: 1000px; /* Remove this if you don't want the 3D effect */
`

export const MissionCardContainer = styled.section`
position: relative;
width: 25vw;
height: 25vh;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #0A99FF;
border-radius: 5%;
transition: transform 0.8s;
transform-style: preserve-3d;
-webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

:active {
    background-color: #FCD19C;
    transform: rotateY(180deg);
}
`

export const MissionCardContainerBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FCD19C;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  text-align: center;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);

`