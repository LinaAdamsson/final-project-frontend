import styled from 'styled-components/macro';

export const IntroImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const IntroText = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 0 70px -70px 70px;

    h2 {
    font-size: 40px;
    margin-bottom: -20px;
    color: white;
    letter-spacing: 4px;
    // font-family:'Bagel Fat One', cursive;
    font-family: 'Pacifico', cursive;
    // text-shadow: 1px 1px 2px grey;
    }

    p {
        font-size: 20px;
        margin-bottom: -20px;
        color: white;
        letter-spacing: 4px;
        // font-family:'Bagel Fat One', cursive;
        font-family: 'Roboto Slab', serif;    
        text-shadow: 1px 1px 2px grey;
        }
`

export const LoginRegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`