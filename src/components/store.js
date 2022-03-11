import { configureStore } from '@reduxjs/toolkit'
import bankSlice from '../feature/counter/BankSlice'

export const store = configureStore({
  reducer: {
    bank: bankSlice,
  },
})