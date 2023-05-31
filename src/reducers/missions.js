import { createSlice } from '@reduxjs/toolkit';

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