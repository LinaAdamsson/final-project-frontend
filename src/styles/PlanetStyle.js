import styled from 'styled-components/macro';

export const Planet = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  margin-bottom: -30px;
  width: 230px;
  mix-blend-mode: multiply;
  animation-name: loadspinner;
  animation-duration: 100000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes loadspinner {
    from {
        transform: rotate(0deg)
    
      } 
    to {
        transform: rotate(360deg)
      }
    }
`