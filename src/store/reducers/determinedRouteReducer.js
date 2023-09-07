import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coordinates: null,
};

export const determinedRouteSlice = createSlice({
  name: "determinedRouteSlice",
  initialState,
  reducers: {
    changeDeterminedRouteCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
  },
});

export const { changeDeterminedRouteCoordinates } =
  determinedRouteSlice.actions;

export const determinedRouteReducer = determinedRouteSlice.reducer;
