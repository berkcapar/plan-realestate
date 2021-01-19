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
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCDRv56H41RBalTT4MVTQd0SKKy-CcMPuU" }}
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
