import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  access_token: "",
  refresh_token: "",
  status: "not-authenticated", // checkin, authenticated, not-authenticated
  errorMessage: undefined,
  sendEmailRegister: false,
  user: {
    // id: null,
    // email: "",
    // username: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state, { payload }) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload.user;
      state.access_token = payload.access_token;
      state.refresh_token = payload.refresh_token;
      state.errorMessage = undefined;
    },
    onRegister: (state, { payload }) => {
      state.sendEmailRegister = true;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.access_token = "";
      state.refresh_token = "";
      state.errorMessage = payload.errorMessage
        ? payload.errorMessage
        : undefined;
    },
    onClearErrorMessage: (state, { payload }) => {
      state.errorMessage = undefined;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClearErrorMessage, onRegister } = authSlice.actions;
