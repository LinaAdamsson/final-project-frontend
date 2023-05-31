import React from 'react'
import TestFetch from 'components/TestFetch'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { user } from 'reducers/user'
import { missions } from 'reducers/missions'
import { Provider } from 'react-redux'

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    missions: missions.reducer
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <TestFetch />
    </Provider>
  )
}
