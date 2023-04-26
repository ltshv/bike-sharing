import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateOfficer = createAsyncThunk(
  "officers_actions/updateOfficer",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      };
    try {
      const response = await axios.put(
        `https://sf-final-project-be.herokuapp.com/api/officers/${data.id}`, 
        {password:data.password, firstName: data.firstName, lastName: data.lastName, approved: data.approved}, options
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
