import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./PropertyDetail.css";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PhoneIcon from "@material-ui/icons/Phone";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Map from "../../Map/Map";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import ImageSlider from "../../ImageSlider/ImageSlider";
import Box from "@material-ui/core/Box";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import propertyService from "../../../services/property";

const PropertyAirports = ({ propertyId }) => {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const fetchAirports = async (propertyId) => {
      console.log(propertyId);

      try {
        const { airports } = await propertyService.fetchAirports(propertyId);
        setState({ status: "success", data: airports });
      } catch (error) {
        setState({ status: "failure", error });
      }
    };

    fetchAirports(propertyId);
  }, [propertyId]);

  switch (state.status) {
    case "loading":
    default:
      return "Fetching airports...";

    case "success":
      return (
        <div>
          {state.data.map((airport) => (
            <div>{airport.name}</div>
          ))}
        </div>
      );

    case "failure":
      return state.error.message;
  }
};

const PropertyDetail = ({ propertyDetail }) => {
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
          <div className="image-slider">
            <ImageSlider slides={propertyDetail.photos} />
          </div>
          <h2 className="title">{propertyDetail.title}</h2>
          <div className="image-area">
            <div className="big-image">
              <img
                onClick={handleSlider}
                src={propertyDetail.photos[0]}
                alt="property"
              />
            </div>
            <div className="small-images">
              {propertyDetail.photos.slice(1, 5).map((photo, index) => {
                return (
                  <div key={index}>
                    <img onClick={handleSlider} src={photo} alt="property" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="button">
            <Button onClick={handleSlider} variant="contained" color="primary">
              Show all Photos
            </Button>
          </div>
          <div className="icon-area">
            <div className="m2-area">
              <SquareFootIcon className="icon" />
              <p>{propertyDetail.m2}m2</p>
            </div>
            <div className="room-area">
              <MeetingRoomIcon className="icon" />
              <p className="room-text">{propertyDetail.roomnumber} rooms</p>
            </div>
            <h3 className="price">{propertyDetail.price}???</h3>
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
              <h3>{propertyDetail.city}</h3>
              <div className="explore">
                <p>Explore</p>
                <ChevronRightIcon className="icon" />
              </div>
              <div className="airports">
                <h3>Nearest Airports</h3>
                <PropertyAirports propertyId={propertyDetail.id} />
              </div>
            </div>
            <div className="map">
              <Map location={propertyDetail.location} zoomLevel={17} />
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
          <ImageSlider slides={propertyDetail.photos} />
        </div>
      ) : null}
    </div>
  );
};

const PropertyDetailContainer = () => {
  const id = useParams().id;
  const propertyDataFromStore = useSelector((state) =>
    state.propertyDetail.find((p) => p.id === id)
  );

  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const fetchProperty = async (id) => {
      console.log(id);
      setState({
        status: "failure",
        error: new Error(
          "need to fetch property from API because we came to this page directly"
        ),
      });
    };

    if (propertyDataFromStore) {
      setState({ status: "success", data: propertyDataFromStore });
    } else {
      fetchProperty(id);
    }
  }, [id, propertyDataFromStore]);

  switch (state.status) {
    case "loading":
    default:
      return "loading component bulursun abi buraya cikiley cikiley";

    case "success":
      return <PropertyDetail propertyDetail={state.data} />;

    case "failure":
      return state.error.message;
  }
};

export default PropertyDetailContainer;
