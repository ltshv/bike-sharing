import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteCase = createAsyncThunk(
  "cases_actions/deleteCase",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.delete(
        `https://sf-final-project-be.herokuapp.com/api/cases/${data.id}`,
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
