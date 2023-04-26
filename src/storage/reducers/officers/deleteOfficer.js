import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteOfficer = createAsyncThunk(
  "officers_actions/deleteOfficer",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.delete(
        `https://sf-final-project-be.herokuapp.com/api/officers/${data.id}`,
        options
      );
      if (!response.data.status === "OK") {
        throw new Error("Error in fetching auth data");
      }
      const responseData = response.data.data;
      return responseData;
    } catch (err) {
      console.log("err message", err.message);
      return rejectWithValue(err.message);
    }
  }
);
