import { MapContainer, TileLayer } from "react-leaflet";

const MapWrapper = ({ children }) => {
  return (
    <div id="map">
      <MapContainer>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {children}
      </MapContainer>
    </div>
  );
};
export default MapWrapper;
