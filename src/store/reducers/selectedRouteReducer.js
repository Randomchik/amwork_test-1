import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ROUTES } from "../../constants";

const initialState = {
  index: null,
  value: null,
};

export const selectedRouteSlice = createSlice({
  name: "selectedRouteSlice",
  initialState,
  reducers: {
    changeSelectedRoute: (state, action) => {
      state.index = action.payload;
      state.value = DEFAULT_ROUTES[action.payload];
    },
  },
});

export const { changeSelectedRoute } = selectedRouteSlice.actions;

export const selectedRouteReducer = selectedRouteSlice.reducer;
