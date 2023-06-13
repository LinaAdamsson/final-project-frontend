import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { user } from 'reducers/user';
import { API_URL } from 'utils/urls';
import { FormWrapper, Button, InputForm, InputLabel } from 'styles/FormStyle';
// import { Avatar } from 'styles/AvatarStyle';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const error = useSelector((store) => store.user.error)
  const accessToken = useSelector((store) => store.user.accessToken)
  // const userId = useSelector((store) => store.user.userId)

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
        if (data.success) {
          console.log('Data from login', data.response)
          dispatch(user.actions.setEmail(data.response.email));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setError(null));
          localStorage.setItem('userId', data.response.id);
          localStorage.setItem('accessToken', data.response.accessToken);
          console.log('User id:', data.response.id)
        } else {
          dispatch(user.actions.setEmail(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setError(data.response))
        }
      })
  }
  return (
    <FormWrapper>
      {/* <Avatar src="https://lh3.googleusercontent.com/_0iKG-ssXTtP7Xei8wHoAQndbKvbr9lxtWw97-6AmN6lOFJ-vUj7U3B90JTCGXWOVOxx7XUYfX2RlyHKBh-DwcFgKMFS0rk6tECTrKAmTuypssGcGwd2_XbBcNK-2C4QxLJQ8z85Xg=w2400" alt="avatar" /> */}
      <form onSubmit={onFormSubmit}>
        <InputForm>
          <InputLabel htmlFor="lastName">
            Email
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </InputLabel>
        </InputForm>
        <InputForm>
          <InputLabel htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </InputLabel>
        </InputForm>
        <Button type="submit">Log in</Button>
        <p>{error}</p>
      </form>
    </FormWrapper>
  )
}

export default LoginForm