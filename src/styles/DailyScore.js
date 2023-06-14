import styled from 'styled-components/macro';

export const DailyScoreWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    margin-top: 50px;
`

export const DailyScorePrompt = styled.h3`
     font-size: 22px;
`

export const DailyScorePointsCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A99FF;
    width: 200px;
    height: 200px;
    margin-top: 20px;
    border-radius: 100%;
    font-size: 50px;
    font-weight: bold;
    color: green;
`