import { useSelector, useDispatch } from "react-redux";

import { changeDeterminedRouteCoordinates } from "../store/reducers/determinedRouteReducer";

export function useDeterminedRoute() {
  const dispatch = useDispatch();

  function selectDeterminedRoute() {
    return useSelector((state) => state.determinedRoute);
  }

  const determinedRoute = selectDeterminedRoute();

  function setDeterminedRoute(coordinates) {
    dispatch(changeDeterminedRouteCoordinates(coordinates));
  }

  return [determinedRoute, setDeterminedRoute];
}
