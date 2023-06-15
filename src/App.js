import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { loading } from 'reducers/loading';
import { missions } from 'reducers/missions';
import { user } from 'reducers/user';
import NotFound from 'components/NotFound';
import Main from 'components/Main';
import RegisterForm from 'components/RegisterForm';
import IntroPage from 'components/IntroPage';
import { Background } from 'styles/OverallStyle';
import { Contact } from 'components/Contact';

export const App = () => {
  const reducer = combineReducers({
    // loading: loading.reducer,
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
            <Route path="/register" element={<RegisterForm />}> </Route>
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
