import { createSlice } from '@reduxjs/toolkit';

export const mission = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    error: null
  },
  reducers: {
    setMissions: (store, action) => {
      store.missions = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})