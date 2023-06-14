import styled from 'styled-components/macro';

export const Planet = styled.img`
  margin-top: 10px;
  margin-bottom: -130px;
  width: 500px;
  // mix-blend-mode: multiply;
  animation-name: loadspinner;
  animation-duration: 50000ms;
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