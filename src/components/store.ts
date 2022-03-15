import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bankSlice from '../feature/counter/BankSlice'

export const rootReducer = combineReducers({
  bankSlice
})

/*export const store = configureStore({
  reducer: {
    bank: bankSlice,
  },
})*/

export const setupStore = () => {
  return configureStore ({
    reducer: rootReducer
  })
} 

  export type RootState = ReturnType<typeof rootReducer>
  export type AppStore = ReturnType<typeof setupStore>
  export type AppDispatch = AppStore['dispatch']
 
