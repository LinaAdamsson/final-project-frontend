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
    score: [],
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
    // setTotalScore: (store, action) => {
    //   store.totalScore = action.payload
    // },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})