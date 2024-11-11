import { createSlice } from '@reduxjs/toolkit';

import type { IAuthState } from './types';

const initialState: IAuthState = {
  isResetPasswordSent: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState(state) {
      state.isResetPasswordSent = false;
    },
    // Fot test SSR purposes only
    setPasswordSent(state) {
      state.isResetPasswordSent = true;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { resetState, setPasswordSent, setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
