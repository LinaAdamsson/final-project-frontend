import styled from 'styled-components/macro';

export const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

export const UserAvatar = styled.img`
  width: 200px;
`

export const UserTitle = styled.h2`
    font-size: 38px;
    font-family: 'Pacifico', cursive;
    // color: white;
    text-shadow: 1px 1px 2px lightgrey;
    color: #FFB200;
    margin: 0px 0px 10px 0px;
`

export const UserText = styled.p`
    font-size: 22px;
    // font-family: 'Gill Sans', serif;
    font-family:'Bagel Fat One', cursive;
    font-weight: 650;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px lightgrey;
    // color: #086695;
    // color: #6E85B7;
    color: white;
    margin: 5px;
`

export const ScoreCardWrapper = styled.div`
    display: flex; 
    margin-top: 10px;
`

export const ScoreCard = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    // background-color: #FFFFFF;
    // opacity: 90%;
    width: 120px;
    height: 120px;
    border: solid #FFB200 3px;
    // border-radius: 10%;
    border-radius: 50%;
    font-family: 'Gill Sans', serif;
    font-weight: 650;
    text-shadow: 1px 1px 2px lightgrey;
    margin: 10px;
    padding: 10px;
    /* text-transform: uppercase; */
    font-size: 14px;
`

export const CardText = styled.h3`
    font-size: 18px;
    font-family: 'Gill Sans', serif;
    font-weight: 650;
    text-shadow: 1px 1px 2px lightgrey;
    // color: #086695;
    // color: #6E85B7;    
    color: white;
    margin-top: 30px;
    margin: 0;
`
export const DailyPoints = styled.p`
    // color: #2EAB6F;
    color: white;
    font-size: 28px;
    font-weight: 650;
    margin: 5px;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Gill Sans', serif;
`

export const TotalPoints = styled.p`
    // color: #F0B560;
    // color: #6E85B7;
    color: #FFB200;
    font-size: 28px;
    font-weight: 650;
    margin: 5px;
    text-align: center;
    text-transform: uppercase;
`

// export const CardPoints = styled.p`
//     color: #F0B560;
//     font-size: 28px;
//     font-weight: 600;
//     margin: 5px;
//     text-align: center;
// `