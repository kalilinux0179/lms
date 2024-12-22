import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    setLogOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogOut } = userSlice.actions;
export default userSlice.reducer;