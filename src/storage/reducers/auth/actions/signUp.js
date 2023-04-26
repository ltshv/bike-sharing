import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignUpData = createAsyncThunk(
  "auth_actions/fetchSignUp",
  async function (data = Object(), { rejectWithValue }) {
    console.log('sign up data', data);
    try {
      const response = await axios.post(
        `https://sf-final-project-be.herokuapp.com/api/auth/sign_up`,
        data
      );
      if (!response.status === 200) {
        throw new Error("Error in fetching auth data");
      }
      const responseData = response.status;
      return responseData;
    } catch (err) {
      console.log("err message", err.message);
      return rejectWithValue(err.message);
    }
  }
);
