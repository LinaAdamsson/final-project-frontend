import styled from 'styled-components/macro';

export const IntroImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
`

export const IntroText = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 20px 100px -20px 100px;

    h1 {
    font-size: 45px;
    margin-bottom: 20px;
    color: white;
    letter-spacing: 6px;
    // font-family:'Bagel Fat One', cursive;
    font-family: 'Pacifico', cursive;
    // text-shadow: 1px 1px 2px grey;
    text-shadow: 1px 1px 2px lightgrey;
}

    h2 {
        font-size: 20px;
        color: white;
        margin-bottom: 30px;
        letter-spacing: 2px;
        font-family:'Bagel Fat One', cursive;
        text-shadow: 1px 1px 2px lightgrey;
    }

    // p {
    //     font-size: 20px;
    //     // color: purple;
    //     color: white;
    //     margin-bottom: 1px;
    //     letter-spacing: 3px;
    //     // font-family:'Bagel Fat One', cursive;
    //     // font-family: 'Roboto Slab', serif;    
    //     font-family: 'Gill Sans', serif;
    //     // text-shadow: 1px 1px 1px grey;
    // }
`

export const LoginRegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Gill Sans', serif;
    font-weight: 650;
    color: purple;
    font-size: 15px;
`