import { createSlice } from "@reduxjs/toolkit";
import { updateOfficer } from "./updateOfficer";
import { getOfficer } from "./getOfficer";
import { getAllOfficers } from "./getAllOfficers";
import { createOfficer } from "./createOfficer";
import { deleteOfficer } from "./deleteOfficer";

const initialState = {
  status: null,
  error: null,
  currentOfficer: {
    status: null,
    error: null,
    data: null,
  },
  officersData: {
    status: null,
    error: null,
    data: null,
  },
};

export const officersSlice = createSlice({
  name: "officers_actions",
  initialState,
  reducers: {
    removeCurrentOfficer: (state, action) => {
      state.currentOfficer.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOfficer.pending, (state) => {
        state.currentOfficer.status = "loading";
        state.currentOfficer.error = null;
      })
      .addCase(createOfficer.fulfilled, (state, action) => {
        state.currentOfficer.status = "resolved";
        state.currentOfficer.error = null;
        state.currentOfficer.data = action.payload;
      })
      .addCase(createOfficer.rejected, (state, action) => {
        console.log("action", action);
        state.currentOfficer.status = "rejected";
        state.currentOfficer.error = action.payload;
      })
      .addCase(updateOfficer.pending, (state) => {
        state.currentOfficer.status = "loading";
        state.currentOfficer.error = null;
      })
      .addCase(updateOfficer.fulfilled, (state, action) => {
        state.currentOfficer.status = "resolved";
        state.currentOfficer.error = null;
        state.currentOfficer.data = action.payload;
      })
      .addCase(updateOfficer.rejected, (state, action) => {
        console.log("action", action);
        state.currentOfficer.status = "rejected";
        state.currentOfficer.error = action.payload;
      })
      .addCase(getOfficer.pending, (state) => {
        state.currentOfficer.status = "loading";
        state.currentOfficer.error = null;
      })
      .addCase(getOfficer.fulfilled, (state, action) => {
        state.currentOfficer.status = "resolved";
        state.currentOfficer.error = null;
        state.currentOfficer.data = action.payload;
      })
      .addCase(getOfficer.rejected, (state, action) => {
        state.currentOfficer.status = "rejected";
        state.currentOfficer.error = action.payload;
      })
      .addCase(getAllOfficers.pending, (state) => {
        state.officersData.status = "loading";
        state.officersData.error = null;
      })
      .addCase(getAllOfficers.fulfilled, (state, action) => {
        state.officersData.status = "resolved";
        state.officersData.error = null;
        state.officersData.data = action.payload;
      })
      .addCase(getAllOfficers.rejected, (state, action) => {
        state.officersData.status = "rejected";
        state.officersData.error = action.payload;
      })
      .addCase(deleteOfficer.pending, (state) => {
        state.officersData.status = "loading";
        state.officersData.error = null;
      })
      .addCase(deleteOfficer.fulfilled, (state, action) => {
        state.officersData.status = "resolved";
        state.officersData.error = null;
      })
      .addCase(deleteOfficer.rejected, (state, action) => {
        state.officersData.status = "rejected";
        state.officersData.error = action.payload;
      });
  },
});

export const {  } = officersSlice.actions;

export default officersSlice.reducer;
