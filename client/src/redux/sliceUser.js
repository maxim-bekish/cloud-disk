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
         state.isAuth = true;
      },
      logOut(state) {
         localStorage.removeItem('token');
         state.user = {};
         state.isAuth = false; 
      },
      // Вы можете добавить другие редюсеры здесь, если нужно
   },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
