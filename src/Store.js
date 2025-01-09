import { configureStore } from '@reduxjs/toolkit'
import pastesSlice from './features/pastes/PastesSlice'
export const store = configureStore({
  reducer: {
    pastes: pastesSlice,
  },
})