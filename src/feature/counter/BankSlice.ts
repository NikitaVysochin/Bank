import { createSlice } from '@reduxjs/toolkit'
import { Get } from '../../Api/Get'
import { CreateCards } from '../../Api/CreateCards'
import { Transfer } from '../../Api/Transfer'
import { ICard } from '../../components/MainPage/PayCards/PayCards'
 
interface IInitialState {
  cards: ICard[]
  status: string
  error: null | string
}

interface IAction<T> {
  type: string
  payload: T
}

const initialState: IInitialState = {
  cards: [],
  status: '',
  error: ''
}

export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    CreateCard(state, action: IAction<object>) {
      CreateCards(state, action)
    },

    Delete(state, action: IAction<string>) {
      state.cards = state.cards.filter(card=>card.id !== action.payload)
    },

    TransferCards(state, action: IAction<object>){
      Transfer(state, action)
    },

    Exit(state){
      state.cards = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(Get.pending, (state) => {
        state.status = 'loading'
        state.error = null 
      })
      .addCase(Get.fulfilled, (state, action)=>{
        state.status = 'resolved'
        state.cards = action.payload
      })
      .addCase(Get.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = action.error.message
      })
    /*[DeleteCards.pending] : (state) => {
      console.log('p',state)
      state.status = 'loading'
      state.error = null
    },
    [DeleteCards.fulfilled] : (state, action) => {
      console.log(action,'lllll')
      state.status = 'resolved'
      state.cards = state.cards.filter(card=>card.id !== action.payload)
    },
    [DeleteCards.rejected] : (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
      console.log(action.payload);
    }*/
  }
});

export const { CreateCard, Delete, TransferCards, Exit } = bankSlice.actions

export default bankSlice.reducer

 