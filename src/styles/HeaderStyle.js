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
margin-left: -20px;
margin-right: -20px;
h2 {
    font-size: 16px;
    color: white;
    // color: #6E85B7;
    letter-spacing: 1px;
    padding-top: 15px;
    text-shadow: 1px 1px 2px lightgrey;
    font-family: 'Pacifico', cursive;
    /* font-family: 'Bagel Fat One', cursive; */
    @media (min-width: 668px){
      font-size: 22px;
      padding-top: 30px;
    }
    @media (min-width: 1024px){
     font-size: 24px;
     padding-top: 50px;
    }
}
h1 {
    font-size: 20px;
    font-family: 'Bagel Fat One', cursive;
    color: white;
    // color: #6E85B7;
    text-shadow: 1px 1px 2px lightgrey;
    /* text-shadow: 1px 1px 2px grey; */
    letter-spacing: 1px;
    margin-top: -10px;
    @media (min-width: 668px){
      font-size: 28px;
      letter-spacing: 4px;
    }
    @media (min-width: 1024px){
     font-size: 32px;
     letter-spacing: 6px;
    }
}
`