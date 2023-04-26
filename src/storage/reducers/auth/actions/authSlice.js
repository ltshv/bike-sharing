import { createSlice } from "@reduxjs/toolkit";
import { fetchSignInData } from "./signIn";
import { fetchSignUpData } from "./signUp";
import { handleSignOut } from "./signOut";
import {
  getLocalData,
  LOCAL_AUTH_DATA,
  LOCAL_AUTH_TOKEN,
  isLocalData,
} from "../../../../hooks/useLocalStorage";

const initialState = {
  status: null,
  error: null,
  isAuth: isLocalData(LOCAL_AUTH_TOKEN),
  authData: {
    token: getLocalData(LOCAL_AUTH_TOKEN) || null,
    user: getLocalData(LOCAL_AUTH_DATA) || null,
  },
};

export const authSlice = createSlice({
  name: "auth_actions",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.authData = handleSignOut();
      state.isAuth = false;
    },
    resetError: (state, action) => {
        state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignInData.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.isAuth = false;
      })
      .addCase(fetchSignInData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.authData = action.payload;
        state.isAuth = true;
      })
      .addCase(fetchSignInData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        state.isAuth = false;
      })
      .addCase(fetchSignUpData.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.isAuth = false;
      })
      .addCase(fetchSignUpData.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.authData = action.payload;
        state.isAuth = false;
      })
      .addCase(fetchSignUpData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
        state.isAuth = false;
      })
  },
});

export const { signOut, resetError } = authSlice.actions;

export default authSlice.reducer;
