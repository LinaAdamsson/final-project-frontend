import styled from 'styled-components/macro';

export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0;
    width: 100vw;
    z-index: 0;
    /* height: 4rem; */
    /* margin-bottom: -70px; */

    @media (min-width: 668px){
      bottom: -5vh;
    }
    @media (min-width: 1024px){
      bottom: -25vh;
    }
  `

export const FooterText = styled.p`
    text-align: center;
    font-family: 'Pacifico', cursive;
    /* font-family: 'Courier New', Courier, monospace; */
    color: #0878D4;
    font-size: 14px;
    width: 90vw;
    position: absolute;
    bottom: 2vh;

    @media (min-width: 668px){
      bottom: 7vh;
      font-size: 18px;
    }
    @media (min-width: 1024px){
      bottom: 25vh;
      font-size: 18px;
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