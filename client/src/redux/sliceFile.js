import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const fileSlice = createSlice({
   name: 'files',
   initialState,
   reducers: {
      addFile(state, action) {
         state[action.payload.id] = action.payload;
      },
      removeFile(state, action) {
         delete state[action.payload.id];
      },
   },
});

export const { addFile, removeFile } = fileSlice.actions;
export default fileSlice.reducer;
