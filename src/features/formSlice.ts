import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  value: number
}

const initialState: FormState = {
  value: 0,
}

export const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = formSlice.actions

export const formReducer = formSlice.reducer