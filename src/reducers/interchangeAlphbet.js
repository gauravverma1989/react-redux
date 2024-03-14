import { createSlice } from '@reduxjs/toolkit';

const alphabetSlice = createSlice({
  name: 'alphabet',
  initialState: {
    alphabet: 'B'
  },
  reducers: {
    increase: state => {
      state.alphabet = 'C';
    },
    decrease: state => {
      state.alphabet = 'A';
    }
  }
});

export const { increase, decrease } = alphabetSlice.actions;
export default alphabetSlice.reducer;