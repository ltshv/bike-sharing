import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const convertDate = (date) => {
  const ISODate = new Date(date);
  const localDate = ISODate.toLocaleDateString("sv-SE");
  return localDate;
};

export const getCase = createAsyncThunk(
  "cases_actions/getCase",
  async function (data = Object(), { rejectWithValue }) {
    const options = {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://sf-final-project-be.herokuapp.com/api/cases/${data.id}`,
        options
      );
      if (!response.data.status === "OK") {
        throw new Error("Error in fetching auth data");
      }
      const responseData = {
        ...response.data.data,
        date: convertDate(response.data.data.date),
        createdAt: convertDate(response.data.data.createdAt),
        updatedAt: response.data.data.updatedAt && convertDate(response.data.data.updatedAt),
      };
      return responseData;
    } catch (err) {
      console.log("err message", err.message);
      return rejectWithValue(err.message);
    }
  }
);
