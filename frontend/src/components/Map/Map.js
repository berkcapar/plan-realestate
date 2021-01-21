import GoogleMapReact from "google-map-react";
import "./Map.css";
import RoomIcon from "@material-ui/icons/Room";

const LocationPin = () => {
  return (
    <div className="pin">
      <RoomIcon className="pin-icon" />
    </div>
  );
};

const Map = ({ location, zoomLevel }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default Map;
