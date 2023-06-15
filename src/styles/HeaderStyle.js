import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90px;
    width: 100vw;
`
export const HeaderText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2 {
    font-size: 15px;
    color: white;
    letter-spacing: 1px;
    padding-top: 15px;
    text-shadow: 1px 1px 2px lightgrey;
    font-family: 'Bagel Fat One', cursive;
    @media (min-width: 668px){
      font-size: 19px;
    }
    @media (min-width: 1024px){
     font-size: 22px;
     padding-top: 40px;
    }
}
h1 {
    font-size: 20px;
    font-family: 'Bagel Fat One', cursive;
    color: white;
    text-shadow: 1px 1px 2px lightgrey;
    letter-spacing: 1px;
    margin-top: -10px;
    @media (min-width: 668px){
      font-size: 25px;
      letter-spacing: 4px;
    }
    @media (min-width: 1024px){
     font-size: 30px;
     letter-spacing: 6px;
    }
}
`