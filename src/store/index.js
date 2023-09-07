import { configureStore } from "@reduxjs/toolkit";
import { selectedRouteReducer } from "./reducers/selectedRouteReducer";
import { determinedRouteReducer } from "./reducers/determinedRouteReducer";
import { sagaRoutingModelReducer } from "./reducers/sagaRoutingModelReducer";

export const store = configureStore({
  reducer: {
    selectedRoute: selectedRouteReducer,
    determinedRoute: determinedRouteReducer,
    sagaRoutingModel: sagaRoutingModelReducer
  },
});
