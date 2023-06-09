import styled from 'styled-components/macro';

export const FormWrapper = styled.div`
display: flex;
justify-content: center;
margin-top: 220px;
input {
    width: 200px;
    height: 20px;
    margin: 5px 0 5px 0;
    border-radius: 5px;
    border-style: none;
}
`
export const InputForm = styled.div`
display: flex;
flex-direction: column;
`

export const Button = styled.button`
width: 200px;
height: 30px;
border-radius: 5px;
border-style: none;
background-color: rgb(40, 127, 219);
color: white;
margin-top: 10px;
`