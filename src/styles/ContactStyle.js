import styled from 'styled-components/macro';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 20px;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;

    @media (min-width: 668px) {
        flex-direction: row;
        margin-top: 20px;
    }
`

export const HeroImg = styled.img`
    border-radius: 50%;
    width: 80px;
    margin: 0 20px;

    @media (min-width: 668px) {

    }
`

export const Links = styled.div`
    flex-direction: column;

    @media (min-width: 668px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0 20px;
    }
`

