import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCase = createAsyncThunk(
  "cases_actions/createCase",
  async function (data = Object(), { rejectWithValue }) {
    console.log("create case data", data);
    const link = data.public
      ? "https://sf-final-project-be.herokuapp.com/api/public/report"
      : "https://sf-final-project-be.herokuapp.com/api/cases/";
    const options = !data.public && {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };

    const postData = data.public
      ? {
          licenseNumber: data.licenseNumber,
          ownerFullName: data.ownerFullName,
          type: data.type,
          color: data.color,
          date: data.date,
          clientId: data.clientId,
          description: data.description,
        }
      : {
          licenseNumber: data.licenseNumber,
          ownerFullName: data.ownerFullName,
          type: data.type,
          color: data.color,
          date: data.date,
          officer: data.officer,
          description: data.description,
        };
    try {
      const response = await axios.post(link, postData, options);
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
