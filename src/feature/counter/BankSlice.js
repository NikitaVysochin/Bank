import { createSlice } from '@reduxjs/toolkit'
import { Get } from '../../Api/Get'
import { CreateCards } from '../../Api/CreateCards'
import { DeleteCards } from '../../Api/DeleteCards'
import { Transfer } from '../../Api/Transfer';

export const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    cards: [],
    status: null,
    error: null
  },
  reducers: {
    CreateCard(state, action) {
      CreateCards(state, action)
    },

    Delete(state, action) {
      state.cards = state.cards.filter(card=>card.id !== action.payload)
    },

    TransferCards(state, action){
      Transfer(state, action)
    },

    Exit(state, action){
      
      state.cards = []
    }
  },
  extraReducers: {
    [Get.pending] : (state) => {
      state.status = 'loading'
      state.error = null
    },
    [Get.fulfilled] : (state, action) => {
      state.status = 'resolved'
      state.cards = action.payload
    },
    [Get.rejected] : (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [DeleteCards.pending] : (state) => {
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
    }
  }
});

export const { CreateCard, Delete, TransferCards, Exit } = bankSlice.actions

export default bankSlice.reducer

 