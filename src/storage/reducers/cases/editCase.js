import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { convertDate } from "./getCase";

export const editCase = createAsyncThunk(
  "cases_actions/editCase",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      };
    try {
      const response = await axios.put(
        `https://sf-final-project-be.herokuapp.com/api/cases/${data.id}`, 
        {status:data.status, licenseNumber: data.licenseNumber, ownerFullName: data.ownerFullName, type: data.type, color: data.color, date: data.date, officer: data.officer, description: data.description, resolution: data.resolution}, options
      );
      if (!response.data.status === "OK") {
        throw new Error("Error in fetching auth data");
      }
      const responseData = {...response.data.data, date: convertDate(response.data.data.date)};
      return responseData;
    } catch (err) {
      console.log("err message", err.message);
      return rejectWithValue(err.message);
    }
  }
);
