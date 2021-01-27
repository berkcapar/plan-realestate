import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PropertyDetail.css";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PhoneIcon from "@material-ui/icons/Phone";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Map from "../../Map/Map";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const PropertyDetail = ({ location }) => {
  const id = useParams().id;
  const property = useSelector((state) =>
    state.property.find((p) => p.id === id)
  );

  switch (property.city) {
    case "Bodrum":
      location = {
        lat: 37.0217,
        lng: 27.2545,
      };
      break;
    case "Antalya":
      location = {
        lat: 36.884804,
        lng: 30.704044,
      };
      break;
    case "Kemer":
      location = {
        lat: 36.3853,
        lng: 29.2132,
      };
      break;
    case "Marmaris":
      location = {
        lat: 36.8571,
        lng: 28.2692,
      };
      break;
    default:
  }

  const [showSlider, setShowSlider] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleSlider = () => {
    setShowSlider(true);
    setShowDetails(false);
  };

  const handleClose = () => {
    setShowSlider(false);
    setShowDetails(true);
  };

  return (
    <div className="detail-container">
      {showDetails ? (
        <div>
          <h2 className="title">{property.title}</h2>
          <div className="image-area">
            <div className="big-image">
              <img src={property.photos[0]} alt="property" />
            </div>
            <div className="small-images">
              {property.photos.slice(1, 5).map((photo, index) => {
                return (
                  <div key={index}>
                    <img src={photo} alt="property" />
                  </div>
                );
              })}
            </div>
          </div>
          <Box display="flex" justifyContent="flex-end" width="92%" mt={1}>
            <Button onClick={handleSlider} variant="contained" color="primary">
              Show all Photos
            </Button>
          </Box>
          <div className="icon-area">
            <div className="m2-area">
              <SquareFootIcon className="icon" />
              <p>{property.m2}</p>
            </div>
            <div className="room-area">
              <MeetingRoomIcon className="icon" />
              <p className="room-text">{property.roomnumber} rooms</p>
            </div>
            <h3 className="price">{property.price}€</h3>
          </div>
          <div className="contact">
            <p>Contact for this House</p>
            <PhoneIcon className="icon" />
          </div>
          <div className="char-key">
            <div className="char-area">
              <h2>Characteristic</h2>
              <h3>General</h3>
              <p>Liveable Surface</p>
              <p>Land</p>
              <p>Number of Rooms</p>
              <p>Number of Bathrooms</p>
              <p>Year of Construction</p>
            </div>
            <div className="key-features">
              <h2>Key Features</h2>
            </div>
          </div>
          <div className="location">
            <div className="text">
              <h2>Location</h2>
              <h3>{property.city}</h3>
              <div className="explore">
                <p>Explore</p>
                <ChevronRightIcon className="icon" />
              </div>
              <div className="airports">
                <h3>Nearest Airports</h3>
              </div>
            </div>
            <div className="map">
              <Map location={location} zoomLevel={17} />
            </div>
          </div>
        </div>
      ) : null}
      {showSlider ? (
        <div>
          <Box
            display="flex"
            justifyContent="flex-end"
            width="92%"
            mb={1}
            mt={1}
            onClick={handleClose}
          >
            <KeyboardBackspaceIcon />
            Go Back to Details Page
          </Box>
          <ImageSlider slides={property.photos} />
        </div>
      ) : null}
    </div>
  );
};

export default PropertyDetail;
