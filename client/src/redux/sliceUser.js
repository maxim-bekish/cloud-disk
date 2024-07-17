import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   user: {},
   isAuth: false,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser(state, action) {
         state.user = action.payload;
      },
      setAuth(state, action) {
         state.isAuth = action.payload;
      },
   },
});

export const { setUser, setAuth } = userSlice.actions;
export default userSlice.reducer;
