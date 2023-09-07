import { useSelector, useDispatch } from "react-redux";

import {
  changeSagaRoutingModelStatus,
  saveDeterminedRouteVersion,
  saveSelectedRouteVersion,
} from "../store/reducers/sagaRoutingModelReducer";

export function useSagaRoutingModel() {
  const dispatch = useDispatch();

  function selectSagaRouting() {
    return useSelector((state) => state.sagaRoutingModel);
  }

  const sagaRoutingModel = selectSagaRouting()

  function setSagaRoutingModelStatus(status) {
    dispatch(changeSagaRoutingModelStatus(status));
  }

  function setDeterminedRouteVersion(newVersion) {
    dispatch(saveDeterminedRouteVersion(newVersion));
  }

  function setSelectedRouteVersion(newVersion) {
    dispatch(saveSelectedRouteVersion(newVersion));
  }

  return [sagaRoutingModel, setSagaRoutingModelStatus, setDeterminedRouteVersion, setSelectedRouteVersion];
}
