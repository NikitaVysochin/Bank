import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bankSlice from './BankSlice'

export const rootReducer = combineReducers({
  bankSlice
})

export const setupStore = () => {
  return configureStore ({
    reducer: rootReducer
  })
} 

  export type RootState = ReturnType<typeof rootReducer>
  export type AppStore = ReturnType<typeof setupStore>
  export type AppDispatch = AppStore['dispatch']
 
