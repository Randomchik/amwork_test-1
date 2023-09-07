import { useSelector, useDispatch } from "react-redux";

import { changeSelectedRoute } from "../store/reducers/selectedRouteReducer";

export function useSelectedRoute() {
  const dispatch = useDispatch();

  function selectRoute() {
    return useSelector((state) => state.selectedRoute);
  }

  const selectedRoute = selectRoute();

  function setSelectedRoute(routeIndex) {
    dispatch(changeSelectedRoute(routeIndex));
  }

  return [selectedRoute, setSelectedRoute];
}
