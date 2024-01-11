import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
      // state.type = action.type; // Set the action type in the state
      state.actionType = action.payload.type;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
