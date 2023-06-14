import styled from 'styled-components/macro';
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

export const SignOutButton = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: absolute;
    border-style: none;
    background-color: yellow;
    font-family: 'Roboto Slab', serif;
    top: 10px;
    right: 20px;
`

/* export const LogoutButton = styled(Button)`
    width: 80px;
    position: absolute;
    top: 10px;
    right: 20px;
` */