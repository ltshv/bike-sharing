import { createSlice } from "@reduxjs/toolkit";
import { editCase } from "./editCase";
import { getCase } from "./getCase";
import { getAllCases } from "./getAllCases";
import { createCase } from "./createCase";
import { deleteCase } from "./deleteCase";

const initialState = {
  status: null,
  error: null,
  currentCase: {
    status: null,
    error: null,
    data: null,
  },
  casesData: {
    status: null,
    error: null,
    data: null,
  },
};

export const casesSlice = createSlice({
  name: "cases_actions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editCase.pending, (state) => {
        state.currentCase.status = "loading";
        state.currentCase.error = null;
      })
      .addCase(editCase.fulfilled, (state, action) => {
        state.currentCase.status = "resolved";
        state.currentCase.error = null;
        state.currentCase.data = action.payload;
      })
      .addCase(editCase.rejected, (state, action) => {
        console.log("action", action);
        state.currentCase.status = "rejected";
        state.currentCase.error = action.payload;
      })
      .addCase(getCase.pending, (state) => {
        state.currentCase.status = "loading";
        state.currentCase.error = null;
      })
      .addCase(getCase.fulfilled, (state, action) => {
        state.currentCase.status = "resolved";
        state.currentCase.error = null;
        state.currentCase.data = action.payload;
      })
      .addCase(getCase.rejected, (state, action) => {
        state.currentCase.status = "rejected";
        state.currentCase.error = action.payload;
      })
      .addCase(getAllCases.pending, (state) => {
        state.casesData.status = "loading";
        state.casesData.error = null;
      })
      .addCase(getAllCases.fulfilled, (state, action) => {
        state.casesData.status = "resolved";
        state.casesData.error = null;
        state.casesData.data = action.payload;
      })
      .addCase(getAllCases.rejected, (state, action) => {
        state.casesData.status = "rejected";
        state.casesData.error = action.payload;
      })
      .addCase(createCase.pending, (state) => {
        state.currentCase.status = "loading";
        state.currentCase.error = null;
      })
      .addCase(createCase.fulfilled, (state, action) => {
        state.currentCase.status = "resolved";
        state.currentCase.error = null;
        state.currentCase.data = action.payload;
      })
      .addCase(createCase.rejected, (state, action) => {
        state.currentCase.status = "rejected";
        state.currentCase.error = action.payload;
      })
      .addCase(deleteCase.pending, (state) => {
        state.currentCase.status = "loading";
        state.currentCase.error = null;
      })
      .addCase(deleteCase.fulfilled, (state, action) => {
        state.currentCase.status = "resolved";
        state.currentCase.error = null;
        state.currentCase.data = action.payload;
      })
      .addCase(deleteCase.rejected, (state, action) => {
        state.currentCase.status = "rejected";
        state.currentCase.error = action.payload;
      });
  },
});

export default casesSlice.reducer;
