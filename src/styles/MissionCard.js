import styled from 'styled-components';

export const MissionCardWrapper = styled.div`
width: 100vw;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 20px;
perspective: 1000px; /* Remove this if you don't want the 3D effect */

`

export const MissionCardContent = styled.div`
 position: relative;
  width: 25vw;
  height: 25vh;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) => (props.className === 'flip' ? 'rotateY(180deg)' : 'none')};
`;

export const MissionCardContentFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
padding: 2%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: #0A99FF;
border-radius: 5%;
transform-style: preserve-3d;
-webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;


/* :active {
    background-color: #FCD19C;
    transform: rotateY(180deg);
} */
`

export const MissionCardContentBack = styled.div`
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