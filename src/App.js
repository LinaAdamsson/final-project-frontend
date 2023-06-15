import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import IntroPage from 'components/pages/IntroPage';
import Main from 'components/pages/Main';
import Contact from 'components/pages/Contact';
import NotFound from 'components/pages/NotFound';
import { Background } from 'styles/OverallStyle';

export const App = () => {
  const reducer = combineReducers({
    missions: missions.reducer,
    user: user.reducer
  })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Background>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<IntroPage />}> </Route>
            <Route path="/" element={<Main />}> </Route>
            <Route path="/contact" element={<Contact />}> </Route>
            <Route path="/404" element={<NotFound />}> </Route>
            <Route path="*" element={<NotFound />}> </Route>
          </Routes>
        </BrowserRouter>
      </Background>
    </Provider>
  )
}
