import styled from 'styled-components/macro';
// import { Button } from './FormStyle';

export const MainContainer = styled.div`
    /* height: 100vh; */ 
    /* width: 100vw; */
    width: 100vw;
    /* overflow: hidden; */
    position: relative;
    display: block;
    justify-content: center;
    z-index: 1;
    margin-bottom: 20px;
    /* margin-top: 1vh; */
`

export const SignOutButton = styled.button`
width: 90px; height: 40px;
background: white;
opacity: 80%;
font-family: 'Roboto Slab', serif;
color: rgb(161, 191, 206);
font-size: 15px;
border-radius: 100px;
-webkit-border-radius: 100px;
-moz-border-radius: 100px;
position: relative;
border-style: none;
margin: 80px auto 20px;

::after, ::before {
content: '';
backround: white;
position: absolute;
z-index: -1
}

::after {
background: white;
width: 30px; height: 30px;
top: -12px; left: 45px;
border-radius: 100px;
-webkit-border-radius: 100px;
-moz-border-radius: 100px;
}

::before {
background: white;
width: 48px; height: 48px;
top: -18px; right: 26px;
border-radius: 200px;
-webkit-border-radius: 200px;
-moz-border-radius: 200px;
}

   /* width: 70px;
    height: 70px;
    border-radius: 100%;
    border-style: none;
    background-color: yellow;
    font-family: 'Roboto Slab', serif; */
`

/* export const LogoutButton = styled(Button)`
    width: 80px;
    position: absolute;
    top: 10px;
    right: 20px;
` */