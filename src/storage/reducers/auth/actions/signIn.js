import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSignInData = createAsyncThunk(
  "auth_actions/fetchSignInData",
  async function (data = Object(), { rejectWithValue }) {
    try {
      const response = await axios.post(
        `https://sf-final-project-be.herokuapp.com/api/auth/sign_in`,
        {email: data.email, password:data.password}
      );
      if (!response.data.status === "OK") {
        throw new Error("Error in fetching auth data");
      }
      const responseData = response.data.data;
      return responseData;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
