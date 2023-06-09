import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: no-wrap;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    margin-top: 20px;


    @media (min-width: 768px){
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        height: 70vh;
        width: 80vw;
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    height: 100px;
    align-items: center;
    background-color: #0878D4;
    // background-color: #47B5FF;
    padding: 10px;
    border-radius: 20px;
    margin: 10px;


    @media (min-width: 768px) {
        margin-top: 20px;
        width: 30vw;
        height: 150px;
    }
`

export const HeroImg = styled.img`
    border-radius: 50%;
    width: 15vw;
    margin: 0 20px;

    @media (min-width: 768px) {
        width: 10vw;
    }
`
export const ContactTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`
export const ContactText = styled.p`
    font-family: 'Pacifico', cursive;
    color: white;
    font-size: 1em;
    
    @media (min-width: 768px){
        font-size: 1.5em;
    }
`
export const Links = styled.div`
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }
`

export const Icons = styled(FontAwesomeIcon)`
    color: white;
    font-size: 1.5em;
    flex-direction: row;
    padding-right: 15px;
`

