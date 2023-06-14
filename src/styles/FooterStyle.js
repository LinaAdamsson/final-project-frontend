import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: -2rem;
  width: 100vw;
  /* height: 4rem; */
  /* margin-bottom: -70px; */
  `

export const FooterText = styled.p`
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    width: 50vw;
    position: absolute;
    bottom: 5vh;
`

export const FooterCloud = styled.div`
  /* display: block; */
`
export const FooterImage = styled.img`
  width: 100vw;
  /* @media (min-width: 768px){
    position: absolute;
    bottom: -10%;
    margin-bottom: -10vh;
  } */
`