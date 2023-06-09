import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { FormWrapper, InputForm, InputLabel, Button, Error } from 'styles/FormStyle';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)
  const error = useSelector((store) => store.user.error)

  useEffect(() => {
    if (accessToken && userId) {
      navigate('/')
    }
  }, [accessToken, userId, navigate])

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
          localStorage.setItem('userId', data.response.id);
          localStorage.setItem('accessToken', data.response.accessToken);
        } else {
          dispatch(user.actions.setFirstName(null));
          dispatch(user.actions.setLastName(null));
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.message))
        }
      })
  }
  return (
    <FormWrapper>
      <form onSubmit={onFormSubmit}>
        <InputForm>
          <InputLabel
            htmlFor="firstName"
            style={{
              fontFamily: 'Gill Sans',
              // color: 'purple'
              color: 'white'
            }}>
            First name
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </InputLabel>
        </InputForm>
        <InputForm>
          <InputLabel
            htmlFor="lastName"
            style={{
              fontFamily: 'Gill Sans',
              // color: 'purple'
              color: 'white'
            }}>
            Last name
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </InputLabel>
        </InputForm>
        <InputForm>
          <InputLabel
            htmlFor="email"
            style={{
              fontFamily: 'Gill Sans',
              // color: 'purple'
              color: 'white'
            }}>
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputLabel>
        </InputForm>
        <InputForm>
          <InputLabel
            htmlFor="password"
            style={{
              fontFamily: 'Gill Sans',
              // color: 'purple'
              color: 'white'
            }}>
            Password
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </InputLabel>
        </InputForm>
        <Button type="submit">Submit</Button>
        <Error>{error}</Error>
      </form>
    </FormWrapper>
  )
}

export default RegisterForm