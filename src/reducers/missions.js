import { createSlice } from '@reduxjs/toolkit';

// Redux = global state management

export const missions = createSlice({
  name: 'missions',
  initialState: {
    missionItems: [],
    error: null
  },
  reducers: {
    setMissionItems: (store, action) => {
      store.missionItems = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    }
  }
})