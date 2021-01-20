import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import RoomIcon from "@material-ui/icons/Room";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";

const PropertyItemList = ({ property }) => {
  return (
    <NavLink className="link" to={`/properties/${property.id}`}>
      <div className="singlesearch-container">
        <div className="singlesearch-img-container">
          <img className="img" alt="property" src={property.photos[0]} />
        </div>
        <div className="singlesearch-text">
          <div className="city-area">
            <RoomIcon className="icon" />
            <p>{property.city}</p>
          </div>
          <h2>{property.title}</h2>
          <div className="property-area">
            <LoyaltyIcon className="icon" />
            <p>{property.option}</p>
          </div>
          <div className="home-area">
            <HomeIcon className="icon" />
            <p>{property.propertyType}</p>
          </div>

          <div className="m2-room-area">
            <div className="m2-area">
              <SquareFootIcon className="icon" />
              <p>{property.m2}</p>
            </div>
            <div className="room-area">
              <MeetingRoomIcon className="icon" />
              <p className="room-text">{property.roomnumber} rooms</p>
            </div>
          </div>
          <p>Asking Price: {property.price}€</p>
        </div>
      </div>
    </NavLink>
  );
};

export default PropertyItemList;
