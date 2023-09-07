import { useEffect } from "react";
import { Polyline } from "react-leaflet/Polyline";
import { Marker } from "react-leaflet/Marker";
import { useMap } from "react-leaflet";

import { useSelectedRoute } from "../../hooks/useSelectedRoute";
import { useDeterminedRoute } from "../../hooks/useDeterminedRoute";
import { useSagaRoutingProcessing } from "../../sagas/useSagaRoutingProcessing";
import "./index.css";

const Map = () => {
  const [selectedRoute] = useSelectedRoute()
  const [ determinedRoute] = useDeterminedRoute()
  const [sagaRoutingModel] = useSagaRoutingProcessing()
  const map = useMap();

  const defaultPosition = [
    ["59.82934196", "30.42423701"],
    ["59.82761295", "30.41705607"],
    ["59.84660399", "30.29496392"],
  ];
  map.fitBounds(defaultPosition);

  useEffect(() => {
    map.fitBounds(determinedRoute?.coordinates || defaultPosition);
  }, [selectedRoute.selectedRouteVersion]);

  return (
    <>
      <Polyline
        key={1}
        positions={determinedRoute?.coordinates || []}
        color={"red"}
      />

      {selectedRoute?.value ? (
        <>
          <Marker
            key={2}
            position={selectedRoute?.value?.routePoint1.split(", ")}
          />
          <Marker
            key={3}
            position={selectedRoute?.value?.routePoint2.split(", ")}
          />
          <Marker
            key={4}
            position={selectedRoute?.value?.routePoint3.split(", ")}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Map;
