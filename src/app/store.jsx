import { configureStore } from '@reduxjs/toolkit'
import storyReducer from '../feature/storySlice'

export const store = configureStore({
  reducer: {
    story: storyReducer,
  },
})