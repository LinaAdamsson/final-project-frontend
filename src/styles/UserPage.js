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
    font-family: "Bagel Fat One", cursive;
    color: orange;
    margin: 0px 0px 10px 0px;
`

export const UserText = styled.p`
    font-size: 22px;
    font-family: 'Roboto Slab', serif;    
    font-weight: 500;
    color: #086695;
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
    align-items: center;
    background-color: #FFFFFF;
    opacity: 90%;
    width: 120px;
    height: 120px;
    border: none;
    border-radius: 10%;
    /* font-family: 'Oswald', sans-serif; */
    font-family: 'Roboto Slab', serif;
    margin: 10px;
    padding: 10px;
    /* text-transform: uppercase; */
    font-size: 14px;
`

export const CardText = styled.h3`
    font-size: 18px;
    color: #086695;    
    margin-top: 30px;
    margin: 0;
`
export const DailyPoints = styled.p`
    color: #2EAB6F;
    font-size: 28px;
    font-weight: 600;
    margin: 5px;
    text-align: center;
`

export const TotalPoints = styled.p`
    color: #F0B560;
    font-size: 28px;
    font-weight: 600;
    margin: 5px;
    text-align: center;
`

// export const CardPoints = styled.p`
//     color: #F0B560;
//     font-size: 28px;
//     font-weight: 600;
//     margin: 5px;
//     text-align: center;
// `