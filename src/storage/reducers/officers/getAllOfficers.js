import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOfficers = createAsyncThunk(
  "officers_actions/getAllOfficers",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://sf-final-project-be.herokuapp.com/api/officers/`,
        options
      );
      if (!response.data.status === "OK") {
        throw new Error("Error in fetching auth data");
      }
      const responseData = response.data.officers;
      return responseData;
    } catch (err) {
      console.log("err message", err.message);
      return rejectWithValue(err.message);
    }
  }
);
