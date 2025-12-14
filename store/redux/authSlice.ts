import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id?: number;
  name?: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string; user?: User }>) {
      // state.token = action.payload.token;
      // state.user = action.payload.user ?? null;
      state.isLoggedIn = true;
    },
    restoreLogin(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, restoreLogin, logout } = authSlice.actions;
export default authSlice.reducer;
