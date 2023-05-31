import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    firstName: null,
    lastName: null,
    email: null,
    userId: null,
    accessToken: null,
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
      store.accessToken = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})