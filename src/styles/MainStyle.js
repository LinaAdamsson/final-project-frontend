import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainContainer = styled.div`
    height: 100vh;
    /* width: 100vw; */
    width: 380px;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
`
export const StyledIcon = styled(FontAwesomeIcon)`
margin-top: 20px;
font-size: 30px;
color: ${(props) => (props.isActive ? 'rgb(40, 127, 219);' : 'white')};
`