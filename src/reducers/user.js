import { createSlice } from '@reduxjs/toolkit';

// Redux = global state management

export const user = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
    userId: null,
    accessToken: null,
    // Sätter vi score och totalScore som arrays här och dispatchar från DailyScore och
    // TotalScore genom att i fetchen skriva dispatch(user.actions.setScore(data));
    // data = hela objektet {}
    // dvs {success: true, response: 87, message: 'Your total score today is 87 points'}
    // Om vi däremot väljer att dispatch(user.actions.setScore(data.response) lagrar vi bara
    // själva pointsen och då ska initialState vara 0
    score: [],
    totalScore: [],
    error: null
  },
  reducers: {
    setFirstName: (store, action) => {
      store.firstName = action.payload
    },
    setLastName: (store, action) => {
      store.lastName = action.payload
    },
    setEmail: (store, action) => {
      store.email = action.payload
    },
    setUserId: (store, action) => {
      store.userId = action.payload
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setScore: (store, action) => {
      store.score = action.payload
    },
    setTotalScore: (store, action) => {
      store.totalScore = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})