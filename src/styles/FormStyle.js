import styled from 'styled-components/macro';

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    text-shadow: 1px 1px 2px lightgrey;
input {
    width: 210px;
    height: 30px;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    border-style: none;
    font-family: 'Gill Sans', serif;
    font-size: 16px;
}
`
export const InputForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-weight: 600;
`

export const Button = styled.button`
    width: 210px;
    height: 30px;
    border-radius: 5px;
    border-style: none;
    background-color: rgb(40, 127, 219);
    color: white;
    margin-top: 20px;
    margin-bottom: 50px;
    /* text-shadow: 1px 1px 1px lightgrey; */
    font-weight: 600;

:disabled {
    background-color: rgba(40, 127, 219, 0.5)
}
`

export const Error = styled.p`
    font-size: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
`