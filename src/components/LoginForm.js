import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import FormContainer from 'css/components/FormStyling';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const error = useSelector((store) => store.user.error)
  const accessToken = useSelector((store) => store.user.accessToken)
  const userId = useSelector((store) => store.user.userId)

  useEffect(() => {
    if (accessToken) {
      navigate('/')
    }
  }, [accessToken, navigate])

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })

    }
    fetch(API_URL('login'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setError(null));
          console.log('User id:', userId)
        } else {
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.response))
        }
      })
  }
  return (
    <FormContainer>

      <form onSubmit={onFormSubmit}>
        <label htmlFor="lastName">Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
        <p>{error}</p>
        </form>
    </FormContainer>
  )
}

export default LoginForm