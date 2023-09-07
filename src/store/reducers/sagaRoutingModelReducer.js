import { createSlice } from "@reduxjs/toolkit";
import { SAGA_STATUSES } from "../../constants";

const initialState = {
  status: SAGA_STATUSES.INITIAL,
  determinedRouteVersion: null,
  selectedRouteVersion: null,
};

export const sagaRoutingModelSlice = createSlice({
  name: "sagaRoutingModelSlice",
  initialState,
  reducers: {
    changeSagaRoutingModelStatus: (state, action) => {
      state.status = action.payload;
    },
    saveDeterminedRouteVersion: (state, action) => {
      state.determinedRouteVersion = action.payload;
    },
    saveSelectedRouteVersion: (state, action) => {
      state.selectedRouteVersion = action.payload;
    },
  },
});

export const {
  changeSagaRoutingModelStatus,
  saveDeterminedRouteVersion,
  saveSelectedRouteVersion,
} = sagaRoutingModelSlice.actions;

export const sagaRoutingModelReducer = sagaRoutingModelSlice.reducer;
