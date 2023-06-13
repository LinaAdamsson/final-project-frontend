import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from './FormStyle';

export const MainContainer = styled.div`
    height: 100vh;
    /* width: 100vw; */
    width: 100vw;
    overflow: hidden; 
    position: relative;
    display: block;
    justify-content: center;
    margin-top: 1vh;
`
export const StyledIcon = styled(FontAwesomeIcon)`
    margin-top: 20px;
    font-size: 30px;
    color: ${(props) => (props.isActive ? 'rgb(40, 127, 219);' : 'white')};
    display: block;
    position: absolute;
    bottom: -10px;
    right: 20px;
`

export const LogoutButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: absolute;
    border-style: none;
    background-color: yellow;
    top: 10px;
    right: 20px;
`

/* export const LogoutButton = styled(Button)`
    width: 80px;
    position: absolute;
    top: 10px;
    right: 20px;
` */