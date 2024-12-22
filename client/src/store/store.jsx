import { authApi } from "@/services/authApi";
import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../slices/UserSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer, // RTK Query API reducer
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
