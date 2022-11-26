import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  access_token: "",
  status: "checking", // checking, authenticated, not-authenticated
  errorMessage: undefined,
  user: {
    // id: null,
    // email: "",
    // username: "",
  },
  events: []
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
      state.events = payload.events;
      state.access_token = payload.access_token;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.access_token = "";
      state.errorMessage = payload.errorMessage
        ? payload.errorMessage
        : undefined;
    },
    onClearErrorMessage: (state, { payload }) => {
      state.errorMessage = undefined;
    },
    
    onErrorMessage: (state, { payload }) => {
      state.errorMessage = payload.errorMessage
        ? payload.errorMessage
        : undefined;
    },
  },
});
// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClearErrorMessage, onErrorMessage } = authSlice.actions;
