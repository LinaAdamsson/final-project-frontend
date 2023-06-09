import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { FormWrapper, InputForm, Button } from 'styles/FormStyle';
// import styled from 'styled-components';

// const Register = styled.form`
//   background-color: blue;
// `

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((store) => store.user.error)

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, email, password })

    }
    fetch(API_URL('register'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(user.actions.setFirstName(data.response.firstName));
          dispatch(user.actions.setLastName(data.response.lastName));
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setFirstName(null));
          dispatch(user.actions.setLastName(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.response))
        }
      })
  }
  return (
    // <Register>
    <FormWrapper>
      <form onSubmit={onFormSubmit}>
        <InputForm>
        <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} />
            </InputForm>
            <InputForm>
        <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} />
        </InputForm>
        <InputForm>
        <label htmlFor="lastName">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </InputForm>
        <InputForm>
        <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </InputForm>
        <Button type="submit">Submit</Button>
        <p>{error}</p>
      </form>
    </FormWrapper>
  // </Register>
  )
}

export default RegisterForm