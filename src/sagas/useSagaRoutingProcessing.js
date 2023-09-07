import { useEffect } from "react";

import { useSagaRoutingModel } from "../hooks/useSagaRoutingModel";
import { useDeterminedRoute } from "../hooks/useDeterminedRoute";
import { useSelectedRoute } from "../hooks/useSelectedRoute";
import { getDeterminedRoute } from "../HTTP-services/routeDetermingAPI";
import { toClientModel } from "../helpers/determinedRouteToClientModel";
import { SAGA_STATUSES } from "../constants";
import { messageUser } from "../helpers/messageUser";

export function useSagaRoutingProcessing() {
  const [
    sagaRoutingModel,
    setSagaRoutingModelStatus,
    setDeterminedRouteVersion,
    setSelectedRouteVersion,
  ] = useSagaRoutingModel();
  const [selectedRoute, setSelectedRoute] = useSelectedRoute();
  const [determinedRoute, setDeterminedRoute] = useDeterminedRoute();

  async function getAndSetDeterminedRoute() {
    const data = await getDeterminedRoute(selectedRoute.value);
    if (data != "error") {
      try {
        setDeterminedRoute(toClientModel(data));
        setDeterminedRouteVersion(toClientModel(data));
        setSelectedRouteVersion(selectedRoute);
        setSagaRoutingModelStatus(SAGA_STATUSES.READY);
      } catch {
        messageUser("Неизвестная ошибка", "error");
        setDeterminedRoute(sagaRoutingModel.setDeterminedRouteVersion);
        setSagaRoutingModelStatus(SAGA_STATUSES.REVERTED);
        setSelectedRoute(sagaRoutingModel.selectedRouteVersion?.index);
      }
    } else {
      setSagaRoutingModelStatus(SAGA_STATUSES.REVERTED);
      setSelectedRoute(sagaRoutingModel.selectedRouteVersion?.index);
    }
  }

  useEffect(() => {
    if (sagaRoutingModel.status != SAGA_STATUSES.INITIAL) {
      if (sagaRoutingModel.status != SAGA_STATUSES.REVERTED) {
        if (sagaRoutingModel.status == SAGA_STATUSES.READY) {
          getAndSetDeterminedRoute();
        } else {
          messageUser("Подождите, предыдущий процесс выполняется", "warning");
          setSagaRoutingModelStatus(SAGA_STATUSES.REVERTED);
          setSelectedRoute(sagaRoutingModel.selectedRouteVersion?.index);
        }
      } else {
        setSagaRoutingModelStatus(SAGA_STATUSES.READY);
      }
      getAndSetDeterminedRoute();
    }
    else{
        setSagaRoutingModelStatus(SAGA_STATUSES.READY);
    }
  }, [selectedRoute.index]);

  return [sagaRoutingModel];
}
