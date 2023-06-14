import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: -1rem;
  width: 100vw;
  /* height: 4rem; */
  /* margin-bottom: -70px; */
  @media (min-width: 668px){
    bottom: -5vh;
  }
  @media (min-width: 1024px){
    bottom: -22vh;
  }
  `

export const FooterText = styled.p`
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    width: 90vw;
    position: absolute;
    bottom: 2vh;
    @media (min-width: 668px){
      bottom: 7vh;
      font-size: 16px;
    }
    @media (min-width: 1024px){
      bottom: 25vh;
  }
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