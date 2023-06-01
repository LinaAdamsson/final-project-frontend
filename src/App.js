import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { user } from 'reducers/user'
import { missions } from 'reducers/missions'
import { Provider } from 'react-redux'
import RegisterForm from 'components/RegisterForm'
import LoginForm from 'components/LoginForm'

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    missions: missions.reducer
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <RegisterForm />
      <LoginForm />
    </Provider>
  )
}
